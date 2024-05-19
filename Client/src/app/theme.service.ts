import { Injectable, WritableSignal, signal } from '@angular/core';

const LOCAL_STORAGE_KEY = "klokken_theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme = signal("light");

  constructor() {
    if (!this.theme()) {
      let storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (storedTheme != null && this.validateTheme(storedTheme)) {
        this.theme.set(storedTheme);
      } 
    }
  }

  changeTheme(theme: string) {
    if (this.validateTheme(theme)) {
      localStorage.setItem(LOCAL_STORAGE_KEY, theme);
      this.theme.set(theme);
    }
  }

  private validateTheme(theme: string): boolean {
    return theme === "dark" || theme === "light";
  }
}
