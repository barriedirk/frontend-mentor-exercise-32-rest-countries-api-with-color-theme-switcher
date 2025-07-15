import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-result-grid',
  standalone: true,
  imports: [],
  templateUrl: './result-grid.html',
  styleUrl: './result-grid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultGrid {}
