import { ChangeDetectionStrategy, Component } from '@angular/core';

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
export class Main {}
