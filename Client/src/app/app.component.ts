import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { ThemeService } from './theme.service';

@Component({
    selector: 'app-root',
    imports: [RouterLink, RouterOutlet, ThemeSelectorComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public themeService: ThemeService) {
  }
}