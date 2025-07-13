import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LoadingService } from '@services/loading';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgClass],
  templateUrl: './loading.html',
  styleUrl: './loading.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Loading {
  private loadingService = inject(LoadingService);

  loading = this.loadingService.loading;
}
