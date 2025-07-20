import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, tap, map } from 'rxjs';

import { Country } from '@interfaces/country';
import { CountryByCode } from '@interfaces/country-by-code';
import { normalizeCountry, normalizeCountryData } from './helpers';

@Injectable({
  providedIn: 'root',
})
export class RestCountries {
  private base = 'https://restcountries.com/v3.1/';
  private http = inject(HttpClient);
  private countriesSubject = new BehaviorSubject<Country[] | null>(null);
  private ciocMap: Map<string, string> = new Map();

  fetchCountries(): Observable<Country[]> {
    if (this.countriesSubject.value) {
      this.countriesSubject.asObservable().pipe(filter((data) => data !== null));
    }

    return this.http
      .get<Country[]>(`${this.base}all?fields=name,cioc,population,region,cca2,cca3,cioc,flags,capital`)
      .pipe(
        map((apiArray) => apiArray.map(normalizeCountry)),
        tap((countries) => {
          this.ciocMap.clear();

          countries.forEach((country) => {
            if (country.cioc) {
              this.ciocMap.set(country.cioc, country.name.common);
            }
          });
        }),
        map((apiArray) => {
          return apiArray.sort((a, b) => {
            const nameA = a.name.common.toUpperCase();
            const nameB = b.name.common.toUpperCase();

            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;

            return 0;
          });
        }),

        tap((apiArray) => this.countriesSubject.next(apiArray)),
      );
  }

  fetchCountryByCCA3(cca3: string): Observable<CountryByCode> {
    return this.http.get<CountryByCode[]>(`${this.base}alpha/${cca3}`).pipe(
      map((countries) => countries[0]),
      map(normalizeCountryData),
      map((country) => {
        country.bordersWithCode = country.borders.map((coic) => ({
          coic,
          name: this.getCountryByCIOC(coic),
        }));

        return country;
      }),
    );
  }

  getCountryByCIOC(cioc: string): string {
    return this.ciocMap.get(cioc) ?? cioc;
  }
}
