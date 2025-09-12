import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ThemeSelector } from './theme-selector/theme-selector';
import { ThemeService } from './theme.service';

@Component({
    selector: 'app-root',
    imports: [RouterLink, RouterOutlet, ThemeSelector],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
  constructor(public themeService: ThemeService) {
  }
}