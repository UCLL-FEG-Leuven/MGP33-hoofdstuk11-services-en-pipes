import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-theme-selector',
    imports: [FormsModule],
    templateUrl: './theme-selector.component.html',
    styleUrl: './theme-selector.component.css'
})
export class ThemeSelectorComponent implements OnInit {
  selectedTheme: string | undefined;

  constructor(private themeService: ThemeService) {    
  }

  ngOnInit(): void {
    this.selectedTheme = this.themeService.theme();
  }

  selectionChanged() {
    if (this.selectedTheme) {
      this.themeService.changeTheme(this.selectedTheme);
    }
  }
}
