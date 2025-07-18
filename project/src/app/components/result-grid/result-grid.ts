import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  signal,
  computed,
  effect,
  inject,
  Input,
  OnInit,
} from '@angular/core';

import { CountryCard } from '@components/country-card/country-card';
import { RestCountries } from '@services/restcountries';
import { Country } from '@interfaces/country';
import { FieldsSearch } from '@interfaces/fields-search';

import { QuerySyncService } from '@services/query-sync';
import { QuerySyncStore } from '@app/services/query-sync-store';

@Component({
  selector: 'app-result-grid',
  standalone: true,
  imports: [CountryCard],
  templateUrl: './result-grid.html',
  styleUrl: './result-grid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultGrid implements OnInit {
  @Input() searchValues!: Signal<FieldsSearch>;

  private queryStore = inject(QuerySyncStore);
  private querySync = inject(QuerySyncService);
  private countriesService = inject(RestCountries);

  private allCountries = signal<Country[]>([]);
  currentPage = signal(1);
  pageSize = 12;

  countries = computed(() => {
    const { filterByName, filterByRegion } = this.searchValues();

    return this.allCountries().filter((country) => {
      const matchesRegion = !filterByRegion || country.region === filterByRegion;
      const matchesName =
        !filterByName || country.name.common.toLowerCase().startsWith(filterByName.trim().toLowerCase());

      return matchesRegion && matchesName;
    });
  });

  totalPages = computed(() => Math.ceil(this.countries().length / this.pageSize));

  pagedCountries = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    const end = start + this.pageSize;

    return this.countries().slice(start, end);
  });

  constructor() {
    effect(() => {
      const { filterByName, filterByRegion } = this.searchValues();

      this.queryStore.filterByName.set(filterByName ?? '');
      this.queryStore.filterByRegion.set(filterByRegion ?? '');

      this.currentPage.set(1);
    });
  }

  ngOnInit() {
    this.querySync.bindSignal('page', this.currentPage);

    this.countriesService.fetchCountries().subscribe((data) => this.allCountries.set(data));
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((n) => n + 1);
      this.queryStore.page.set(this.currentPage());
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((n) => n - 1);
      this.queryStore.page.set(this.currentPage());
    }
  }
}
