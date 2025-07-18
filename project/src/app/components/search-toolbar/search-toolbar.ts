import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';

import { FieldsSearch } from '@interfaces/fields-search';

import { CustomSelectComponent } from '@components/custom-select/custom-select';
import { Destroy } from '@services/destroy';
import { QuerySyncService } from '@app/services/query-sync';

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
  @Input() byName: string = '';
  @Input() byRegion: string = '';

  @Output() formChanged = new EventEmitter<FieldsSearch>();

  private querySync = inject(QuerySyncService);

  regions: string[] = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  searchForm: FormGroup;

  private destroy$ = inject(Destroy);

  constructor() {
    this.searchForm = new FormGroup({
      filterByName: new FormControl(this.byName),
      filterByRegion: new FormControl(this.byRegion),
    });
  }

  ngOnInit() {
    this.querySync.bindForm(this.searchForm, ['filterByName', 'filterByRegion']);

    this.searchForm.valueChanges.pipe(debounceTime(500), takeUntil(this.destroy$)).subscribe((formValues) => {
      this.formChanged.emit(formValues);
    });
  }
}
