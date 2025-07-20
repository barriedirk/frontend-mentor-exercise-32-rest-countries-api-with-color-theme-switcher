import { Injectable, signal } from '@angular/core';

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
};

export type ThemeType = (typeof THEME)[keyof typeof THEME];

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = signal<ThemeType>(THEME.LIGHT);

  constructor() {
    const saved = localStorage.getItem('theme') as ThemeType | null;

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = systemPrefersDark ? THEME.DARK : THEME.LIGHT;

    this.theme.set(saved ?? defaultTheme);

    this.applyTheme();
  }

  toggleTheme() {
    this.theme.set(this.theme() === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
    this.applyTheme();
  }

  get currentTheme() {
    return this.theme;
  }

  private applyTheme() {
    const theme = this.theme();

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}
