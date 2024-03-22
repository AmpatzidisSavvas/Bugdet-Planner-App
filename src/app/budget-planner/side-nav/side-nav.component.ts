import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  isSlideOut = true;

  constructor(private router: Router) {}

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }

  onDashboard() {
    this.router.navigate(['/budget-planner/dashboard']);
  }

  onProfile() {
    this.router.navigate(['/budget-planner/profile']);
  }

  onHistory() {
    this.router.navigate(['/budget-planner/history']);
  }

  onLogout() {
    this.router.navigate(['/budget-planner/login']);
  }

}