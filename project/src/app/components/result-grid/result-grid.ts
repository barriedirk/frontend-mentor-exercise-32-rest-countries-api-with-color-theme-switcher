import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';

import { CountryCard } from '@components/country-card/country-card';

import { RestCountries } from '@services/restcountries';

import { Country } from '@interfaces/country';

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
  private countriesService = inject(RestCountries);

  countries = signal<Country[]>([]);

  mockup = [
    {
      cca3: '',
      href: '',
      alt: '',
      imageFlag: '',
      name: 'Germany',
      population: 34343,
      region: 'Europe',
      capital: 'Berlin',
    },
    {
      cca3: '',
      href: '',
      alt: '',
      imageFlag: '',
      name: 'Germany',
      population: 34343,
      region: 'Europe',
      capital: 'Berlin',
    },
    {
      cca3: '',
      href: '',
      alt: '',
      imageFlag: '',
      name: 'Germany',
      population: 34343,
      region: 'Europe',
      capital: 'Berlin',
    },
  ];

  ngOnInit() {
    this.countriesService
      .fetchCountries()
      .pipe(
        tap((data) => {
          console.log(data);
          this.countries.set(data);
        }),
      )
      .subscribe();
  }
}
