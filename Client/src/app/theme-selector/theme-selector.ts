import { Component, OnInit } from '@angular/core';
import { ThemeManager } from '../theme-manager';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-theme-selector',
    imports: [FormsModule],
    templateUrl: './theme-selector.html',
    styleUrl: './theme-selector.css'
})
export class ThemeSelector implements OnInit {
  selectedTheme: string | undefined;

  constructor(private themeManager: ThemeManager) {    
  }

  ngOnInit(): void {
    this.selectedTheme = this.themeManager.theme();
  }

  selectionChanged() {
    if (this.selectedTheme) {
      this.themeManager.changeTheme(this.selectedTheme);
    }
  }
}
