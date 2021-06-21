import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from './shared/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'employee-management-app';
  showLogoutBtn!: boolean;
  // @Input
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private empService: EmployeeService
  ) {}
ngOnInit() {
     this.empService.loggedIn();
     // console.log(  localStorage.getItem('Button'));
     console.log( localStorage.getItem('token'));
     localStorage.removeItem('token');
     localStorage.removeItem('admin');
    }
    logout() {
      // console.log("Log Out Sucess");
      this.router.navigateByUrl('login');
      this.toastr.info("Logout Successfully.");
      localStorage.removeItem('token');
    }


}
