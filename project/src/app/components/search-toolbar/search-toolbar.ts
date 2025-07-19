import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';

import { FieldsSearch } from '@interfaces/fields-search';

import { CustomSelectComponent } from '@components/custom-select/custom-select';
import { Destroy } from '@services/destroy';
import { QuerySyncService } from '@app/services/query-sync';
import { QuerySyncStore } from '@app/services/query-sync-store';

@Component({
  selector: 'app-search-toolbar',
  standalone: true,
  imports: [ReactiveFormsModule, CustomSelectComponent],
  templateUrl: './search-toolbar.html',
  styleUrl: './search-toolbar.scss',
  providers: [Destroy],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchToolbar implements OnInit {
  @Output() formChanged = new EventEmitter<FieldsSearch>();

  private querySync = inject(QuerySyncService);
  private queryStore = inject(QuerySyncStore);

  regions: string[] = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  searchForm: FormGroup;

  private destroy$ = inject(Destroy);

  constructor() {
    const byName = this.queryStore.filterByName();
    const byRegion = this.queryStore.filterByRegion();

    this.searchForm = new FormGroup({
      filterByName: new FormControl(byName),
      filterByRegion: new FormControl(byRegion === 'All' ? '' : byRegion),
    });
  }

  ngOnInit() {
    this.querySync.bindForm(this.searchForm, ['filterByName', 'filterByRegion']);

    this.searchForm.valueChanges.pipe(debounceTime(500), takeUntil(this.destroy$)).subscribe((formValues) => {
      this.formChanged.emit(formValues);
    });
  }
}
