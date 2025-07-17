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

import { ActivatedRoute, Router } from '@angular/router';

import { CountryCard } from '@components/country-card/country-card';
import { RestCountries } from '@services/restcountries';
import { Country } from '@interfaces/country';
import { FieldsSearch } from '@interfaces/fields-search';

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

  private route = inject(ActivatedRoute);
  private router = inject(Router);
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
      this.searchValues();
      this.currentPage.set(1);
      // this.updateQueryParams({ filterByName, filterByRegion, page: 1 });
      this.updateQueryParams({ page: 1 });
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const name = params['filterByName'] || '';
      const region = params['filterByRegion'] || '';
      const page = parseInt(params['page'], 10) || 1;

      // this.currentPage.set(page);
      // this.searchForm.setValue({ filterByName: name, filterByRegion: region }, { emitEvent: false });
      // this.onFilter({ filterByName: name, filterByRegion: region });
    });

    this.countriesService.fetchCountries().subscribe((data) => this.allCountries.set(data));
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((n) => n + 1);

      this.updateQueryParams({
        ...this.searchValues(),
        page: this.currentPage(),
      });
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((n) => n - 1);

      this.updateQueryParams({
        ...this.searchValues(),
        page: this.currentPage(),
      });
    }
  }

  updateQueryParams(params: { filterByName?: string; filterByRegion?: string; page?: number }) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge', // keeps existing params unless overwritten
    });
  }
}
