import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isPlay: boolean = false;
  constructor(
    private router: Router,
  ) {
  }

  usersManagementRoot = [
    {
      'title': 'Project',
      'root': '/project'
    },
    {
      'title': 'Nation',
      'root': '/nation'
    },
  ];

  redirectToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  redirectToUserManagement() {
    this.router.navigate(['/person']);
  }

  redirectToProject() {
    this.router.navigate(['/project']);
  }

  redirectToRoot(root: string) {
    this.router.navigate([root]);
  }

  OnOff() {
    this.isPlay = !this.isPlay
  }
}
