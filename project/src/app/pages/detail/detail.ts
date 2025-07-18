import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { RouterLink } from '@angular/router';

import { Location } from '@angular/common';
import { QuerySyncStore } from '@services/query-sync-store';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Detail {
  private location = inject(Location);
  queryStore = inject(QuerySyncStore);

  goBack() {
    this.location.back();
  }
}
