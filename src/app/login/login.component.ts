import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email :string = "admin@gmail.com";
  password: string = "admin123";
  showAdminForm!: boolean;
  showEmplyeeForm!: boolean;
  hideButton: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login() {
    if(this.email == "admin@gmail.com" && this.password == "admin123") {
      console.log("Admin login Success");
      this.router.navigateByUrl('admin');
    } else {
      alert("Invalid Username and Password..!");
    }
  }

  adminLogin() {
    this.showAdminForm = true;
    this.showEmplyeeForm = false;
    this.hideButton = true;
    // this.router.navigateByUrl('admin');
}

employeLogin() {
  this.showEmplyeeForm = true;
  this.showAdminForm = false;
  this.hideButton = true;
  // this.router.navigateByUrl('employee');
}

home() {
  this.hideButton= false;
  this.showEmplyeeForm = false;
  this.showAdminForm = false;
}

}
