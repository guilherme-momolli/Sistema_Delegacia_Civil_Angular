import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseButton} from '../../shared/components/buttons/base-button/base-button';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [SharedModule, BaseButton, CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {
   constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
