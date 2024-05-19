import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ThemeComponent } from './theme/theme.component';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public themeService: ThemeService) {
  }
}