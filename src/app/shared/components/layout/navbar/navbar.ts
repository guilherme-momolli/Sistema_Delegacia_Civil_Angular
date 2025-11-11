import { Component } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme/theme-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }
}
