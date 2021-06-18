import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-management-app';
  showLogoutBtn!: boolean;
  // @Input
  constructor(
    private router: Router
  ) {}

  logout() {
    console.log("Log Out Sucess");
    this.router.navigateByUrl('login');
  }


}
