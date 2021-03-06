import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private formbuilder: FormBuilder,
    private toastr: ToastrService
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
      this.toastr.success('Login Success');
      localStorage.setItem('token', "true");
    } else {
      this.toastr.warning('Invalid Username and Password..!');
      // alert("Invalid Username and Password..!");
    }

  }

  adminLogin() {
    this.showAdminForm = true;
    this.showEmplyeeForm = false;
    this.hideButton = true;
}

employeLogin() {
  this.showEmplyeeForm = true;
  this.showAdminForm = false;
  this.hideButton = true;
}

home() {
  this.hideButton= false;
  this.showEmplyeeForm = false;
  this.showAdminForm = false;
}
loginSubmit(value:any){
  for(let i=0 ; i< this.data.length; i++)
  {
    // console.log("User Found" , this.data[i], value);
      if (this.data[i].email == value.email && this.data[i].password == value.password
         && this.data[i].employeeID == value.employeeId)
      {
          console.log(this.data[i].employeeID);
          this.toastr.success('Login Success');
          this.router.navigate([`employee/${this.data[i].id}`]);
          localStorage.setItem('token', "true");
          // console.log(localStorage.getItem('Button'));
          // this.router.navigateByUrl("employee", this.data[i].employeeId);
      } else {
        // alert("Invalid Details..")
        // console.log("error");
      }
    }
    // this.toastr.warning('Invalid Login Details!');
}
showPassword() {
  this.show = !this.show;
}


}
