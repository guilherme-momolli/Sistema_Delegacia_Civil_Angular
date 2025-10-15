import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage-service';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly DARK_CLASS = 'dark-theme';
  private readonly STORAGE_KEY = 'darkMode';

  constructor(private localStorageService: LocalStorageService) {}

  toggleDarkMode(): void {
    const isDark = document.body.classList.toggle(this.DARK_CLASS);
    this.localStorageService.setItem(this.STORAGE_KEY, isDark);
  }

  initTheme(): void {
    const isDark = this.localStorageService.getItem<boolean>(this.STORAGE_KEY);
    if (isDark) this.enableDarkMode();
  }

  enableDarkMode(): void {
    document.body.classList.add(this.DARK_CLASS);
  }

  disableDarkMode(): void {
    document.body.classList.remove(this.DARK_CLASS);
  }

  isDarkMode(): boolean {
    return document.body.classList.contains(this.DARK_CLASS);
  }
}
