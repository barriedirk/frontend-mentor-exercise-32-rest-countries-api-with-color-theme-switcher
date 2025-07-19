import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { FieldsSearch } from '@interfaces/fields-search';

import { ResultGrid } from '@components/result-grid/result-grid';
import { SearchToolbar } from '@components/search-toolbar/search-toolbar';
import { QuerySyncStore } from '@app/services/query-sync-store';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SearchToolbar, ResultGrid],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main {
  private queryStore = inject(QuerySyncStore);
  filterByName: string = '';
  filterByRegion: string = '';
  page: number = 1;

  private searchValuesForm = signal<FieldsSearch>({
    filterByName: '',
    filterByRegion: '',
  });

  readonly searchValues = computed(() => this.searchValuesForm());

  constructor() {
    const filterByName = this.queryStore.filterByName();
    const filterByRegion = this.queryStore.filterByRegion();

    this.searchValuesForm.set({
      filterByName: this.queryStore.filterByName() ?? '',
      filterByRegion: filterByRegion === 'All' ? '' : filterByRegion,
    });
  }

  onFormChanged({ filterByName, filterByRegion }: FieldsSearch) {
    this.searchValuesForm.set({
      filterByName,
      filterByRegion: filterByRegion === 'All' ? '' : filterByRegion,
    });
  }
}
