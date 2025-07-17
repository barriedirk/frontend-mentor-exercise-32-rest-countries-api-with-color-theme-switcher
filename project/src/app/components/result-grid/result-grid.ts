import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  Input,
  OnInit,
  Signal,
  signal,
} from '@angular/core';

import { CountryCard } from '@components/country-card/country-card';

import { RestCountries } from '@services/restcountries';

import { Country } from '@interfaces/country';
import { FieldsSearch } from '@interfaces/fields-search';

import { tap } from 'rxjs';

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

  private countriesService = inject(RestCountries);

  countries = signal<Country[]>([]);
  // pagedCountries = signal<Country[]>([]);

  pagedCountries = computed(() => {
    const countriesList = this.countries();
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;

    return countriesList.slice(start, end);
  });
  currentPage = 1;
  pageSize = 12;

  get totalPages(): number {
    return Math.ceil(this.countries().length / this.pageSize);
  }

  constructor() {
    effect(() => {
      this.onFilter(this.searchValues());
    });
  }

  ngOnInit() {
    this.onFilter({ filterByName: '', filterByRegion: '' });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      // this.paginate();
    }
  }

  onFilter({ filterByName, filterByRegion }: FieldsSearch) {
    this.countriesService
      .fetchCountries()
      .pipe(
        tap((countries) => {
          if (filterByRegion !== '') {
            countries = countries.filter((country) => country.region === filterByRegion);
          }

          if (filterByName !== '') {
            countries = countries.filter((country) =>
              country.name.common.toLowerCase().startsWith(filterByName.trim().toLowerCase()),
            );
          }

          console.log(countries);
          this.countries.set(countries);
          this.currentPage = 1;

          // this.paginate();
        }),
      )
      .subscribe();
  }

  // paginate() {
  //   const start = (this.currentPage - 1) * this.pageSize;
  //   const end = start + this.pageSize;

  //   this.pagedCountries.set(this.countries().slice(start, end));
  // }
}
