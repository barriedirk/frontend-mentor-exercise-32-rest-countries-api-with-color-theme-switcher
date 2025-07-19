import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { DecimalPipe, Location } from '@angular/common';
import { QuerySyncStore } from '@services/query-sync-store';
import { RestCountries } from '@services/restcountries';

import { CountryByCode } from '@interfaces/country-by-code';
import { FadeInOnView } from '@app/directives/fade-in-on-view';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink, DecimalPipe, FadeInOnView],
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

  country = signal<CountryByCode | null>(null);
  borderCountries: { cca3: string; name: string }[] = [];

  ngOnInit() {
    const routeParams = this.route.snapshot.params;

    const cca3 = routeParams['cca3'];

    this.loadCountry(cca3);
  }

  loadCountry(code: string) {
    this.restCountries.fetchCountryByCCA3(code).subscribe((country) => {
      this.country.set(country);
    });
  }

  nativeName = computed(() => {
    const country = this.country();

    const names = country?.name?.nativeName;

    if (!names) return country?.name?.common;

    const first = Object.values(names)[0];

    return first?.common || country?.name?.common;
  });

  currencyList = computed(() => {
    const country = this.country();

    return Object.values(country?.currencies || {})
      .map((c: any) => c.name)
      .join(', ');
  });

  languageList = computed(() => {
    const country = this.country();

    return Object.values(country?.languages || {}).join(', ');
  });

  navigateToCountry(cioc: string) {
    this.router.navigate(['/detail', cioc], {
      queryParams: {
        filterByName: this.queryStore.filterByName() ?? '',
        filterByRegion: this.queryStore.filterByRegion() ?? '',
        page: this.queryStore.page() ?? 1,
      },
      replaceUrl: true,
    });

    this.country.set(null);
    this.loadCountry(cioc);
  }

  goBack() {
    this.location.back();
  }
}
