import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { FieldsSearch } from '@interfaces/fields-search';

import { ResultGrid } from '@components/result-grid/result-grid';
import { SearchToolbar } from '@components/search-toolbar/search-toolbar';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SearchToolbar, ResultGrid],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main {
  filterByName: string = '';
  filterByRegion: string = '';

  private searchValuesForm = signal<FieldsSearch>({
    filterByName: '',
    filterByRegion: '',
  });

  readonly searchValues = computed(() => this.searchValuesForm());

  onFormChanged({ filterByName, filterByRegion }: FieldsSearch) {
    this.searchValuesForm.set({
      filterByName,
      filterByRegion: filterByRegion === 'All' ? '' : filterByRegion,
    });
  }
}
