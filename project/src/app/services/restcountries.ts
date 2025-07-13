import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, tap, map } from 'rxjs';

import { Country } from '@interfaces/country';
import { normalizeCountry } from './helpers';

@Injectable({
  providedIn: 'root',
})
export class RestCountries {
  private base = 'https://restcountries.com/v3.1/';
  private http = inject(HttpClient);
  private countriesSubject = new BehaviorSubject<Country[] | null>(null);

  fetchCountries(): Observable<Country[]> {
    if (this.countriesSubject.value) {
      this.countriesSubject.asObservable().pipe(filter((data) => data !== null));
    }

    return this.http.get<Country[]>(`${this.base}independent?status=true`).pipe(
      map((apiArray) => apiArray.map(normalizeCountry)),
      tap((apiArray) => this.countriesSubject.next(apiArray)),
    );
  }

  fetchCountryByCCA3(cca3: string): Observable<Country> {
    return this.http.get<Country>(`${this.base}alpha/${cca3}`).pipe(map(normalizeCountry));
  }
}
