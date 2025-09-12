import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-theme-selector',
    imports: [FormsModule],
    templateUrl: './theme-selector.html',
    styleUrl: './theme-selector.css'
})
export class ThemeSelector implements OnInit {
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
