import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'employee-management-app';
  showLogoutBtn!: string;
  // @Input
  constructor(
    private router: Router
  ) {}
ngOnInit() {
  // console.log(  localStorage.getItem('Button'));
}
  logout() {
    console.log("Log Out Sucess");
    this.router.navigateByUrl('login');
  }


}
