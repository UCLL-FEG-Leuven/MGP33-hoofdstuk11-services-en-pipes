import { Injectable } from '@angular/core';

const LOCAL_STORAGE_KEY = "klokken_theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string | undefined;

  get selectedTheme() {
    if (!this.theme) {
      let storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (storedTheme != null && this.validateTheme(storedTheme)) {
        this.theme = storedTheme;
      } else {
        this.theme = "white";
      }
    }
    return this.theme;
  }

  set selectedTheme(theme: string) {
    if (this.validateTheme(theme)) {
      this.theme = theme;
      localStorage.setItem(LOCAL_STORAGE_KEY, theme);
    }
  }

  private validateTheme(theme: string): boolean {
    return theme === "dark" || theme === "light";
  }
}
