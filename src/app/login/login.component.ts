import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';

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
  data!: any ;
  employeeForm!: FormGroup;
  adminForm!: FormGroup;
  show!: boolean;
  constructor(
    private router: Router,
    private empService: EmployeeService,
    private formbuilder: FormBuilder
  ) {this.show = false; }

  ngOnInit(): void {
    // Employee Form Validations
    this.employeeForm = this.formbuilder.group({
      employeeId: [ '', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });

      // Admin Login Form Validations
      this.adminForm = this.formbuilder.group({
        email: ['admin@gmail.com', [Validators.email, Validators.required]],
        password: ['admin123', Validators.required],
      });

    this.empService.getEmploye().subscribe( res => {
      // console.log(res);
       this.data =res;
      console.log(this.data);
    });
  }
  login(value:any) {
    if(this.email == value.email && this.password == value.password) {
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
loginSubmit(value:any){
  // console.log(value.email);
  // console.log(value.password);
  // console.log(value.employeeId);
  for(let i=0 ; i< this.data.length; i++)
  {
    console.log("User Found" , this.data[i], value);
    console.log(this.data[i].email == value.email);
    console.log(this.data[i].password == value.password);
    console.log(this.data[i].employeeID == value.employeeId);
      if (this.data[i].email == value.email && this.data[i].password == value.password
         && this.data[i].employeeID == value.employeeId)
      {
          console.log(this.data[i].employeeID);
          this.router.navigate([`employee/${this.data[i].id}`]);
          // this.router.navigateByUrl("employee", this.data[i].employeeId);
      } else {
        // alert("Invalid Details..")
        console.log("error");
      }
  }
}
showPassword() {
  this.show = !this.show;
}
}
