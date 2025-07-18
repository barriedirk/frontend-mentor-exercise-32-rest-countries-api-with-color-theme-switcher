import { Injectable, WritableSignal, signal, effect, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class QuerySyncStore {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  filterByName: WritableSignal<string> = signal('');
  filterByRegion: WritableSignal<string> = signal('');
  page: WritableSignal<number> = signal(1);

  constructor() {
    const query = this.route.snapshot.queryParams;

    this.filterByName.set(query['filterByName'] || '');
    this.filterByRegion.set(query['filterByRegion'] || '');
    this.page.set(+query['page'] || 1);

    const isSearchPage = this.router.url.startsWith('/search') || this.router.url === '/';

    if (isSearchPage) {
      this.syncToUrl();
    }
  }

  syncToUrl() {
    effect(() => {
      const queryParams = {
        filterByName: this.filterByName() || undefined,
        filterByRegion: this.filterByRegion() || undefined,
        page: this.page() > 1 ? this.page() : undefined,
      };

      this.router.navigate([], {
        queryParams,
        queryParamsHandling: 'merge',
        replaceUrl: true,
      });
    });
  }
}
