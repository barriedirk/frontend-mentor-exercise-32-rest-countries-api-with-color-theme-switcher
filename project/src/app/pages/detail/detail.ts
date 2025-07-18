import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { DecimalPipe, Location } from '@angular/common';
import { QuerySyncStore } from '@services/query-sync-store';
import { RestCountries } from '@app/services/restcountries';
import { Country } from '@app/interfaces/country';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Detail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private restCountries = inject(RestCountries);

  private location = inject(Location);
  queryStore = inject(QuerySyncStore);

  country!: Country;
  borderCountries: { cca3: string; name: string }[] = [];

  // Query params for "go back"
  filterByName = '';
  filterByRegion = '';
  page = 1;

  ngOnInit() {
    const routeParams = this.route.snapshot.params;

    const cca3 = routeParams['cca3'];

    this.restCountries.fetchCountryByCCA3(cca3).subscribe((country) => {
      this.country = country;

      console.log(country);
      this.loadBorderCountries(country.borders || []);
    });
  }

  /** Returns the native name in the user's language (or fallback) */
  get nativeName(): string {
    const names = this.country?.name?.nativeName;
    if (!names) return this.country?.name?.common;
    const first = Object.values(names)[0];
    return first?.common || this.country?.name?.common;
  }

  /** Returns list of currency names */
  get currencyList(): string {
    return Object.values(this.country.currencies || {})
      .map((c: any) => c.name)
      .join(', ');
  }

  /** Returns list of language names */
  get languageList(): string {
    return Object.values(this.country.languages || {}).join(', ');
  }

  private loadBorderCountries(borderCodes: string[]) {
    if (!borderCodes.length) return;

    // this.restCountries.fetchCountryByCCA3(borderCodes).subscribe((countries) => {
    //   this.borderCountries = countries.map((c) => ({
    //     cca3: c.cca3,
    //     name: c.name.common,
    //   }));
    // });
  }

  /** Go to another country */
  navigateToCountry(cca3: string) {
    this.router.navigate(['/detail', cca3], {
      queryParams: {
        filterByName: this.filterByName,
        filterByRegion: this.filterByRegion,
        page: this.page,
      },
    });
  }

  goBack() {
    this.location.back();
  }
}
