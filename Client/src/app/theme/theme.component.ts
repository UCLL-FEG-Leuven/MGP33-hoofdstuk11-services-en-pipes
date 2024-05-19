import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent implements OnInit {
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
