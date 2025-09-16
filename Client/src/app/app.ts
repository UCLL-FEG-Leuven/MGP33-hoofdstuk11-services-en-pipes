import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ThemeSelector } from './theme-selector/theme-selector';
import { ThemeManager } from './theme-manager';

@Component({
    selector: 'app-root',
    imports: [RouterLink, RouterOutlet, ThemeSelector],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
  constructor(public themeManager: ThemeManager) {
  }
}
