import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { ThemeService } from '@services/theme';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private themeService = inject(ThemeService);

  currentTheme = computed(() => this.themeService.currentTheme());

  toggle() {
    this.themeService.toggleTheme();
  }
}
