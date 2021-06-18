import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(
    private router: Router,
    private empService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.empService.getEmploye().subscribe( res => {
      // console.log(res);
       this.data =res;
      console.log(this.data);

    })
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
}
