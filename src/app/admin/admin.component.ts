import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from './admin.modal';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  email :string = "admin@gmail.com";
  password: string = "admin123";
  //
  formValue!: FormGroup;
  employModel: Employee = new Employee();
  empolyeData : any ;
  showEmpolyeData : any = {};
  showAdd!: boolean;
  showUpdate!: boolean;
  //
  HighlightRow! : Number;
  ClickedRow:any;
  constructor(
    private router: Router,
    //
    private formbuilder: FormBuilder,
    private empService: EmployeeService
  ) {
    //
    this.ClickedRow = function(index: Number){
      this.HighlightRow = index;
      console.log(index);
   };
  }

  ngOnInit(): void {
    //
    this.formValue = this.formbuilder.group({
      employeeName : ['', Validators.required],
      employeeID: [''],
      email: ['', [Validators.email, Validators.required]],
      department: [''],
      password: [''],
    });
    this.getAllEmploy();
  }
//
addEmploye() {
  this.formValue.reset();
  this.showAdd = true;
  this.showUpdate = false;
}
postEmployeDetails() {
this.employModel.employeeName = this.formValue.value.employeeName;
this.employModel.employeeID = this.formValue.value.employeeID;
this.employModel.email = this.formValue.value.email;
this.employModel.department = this.formValue.value.department;
this.employModel.password = this.formValue.value.password;

this.empService.postEmploye(this.employModel).subscribe(res => {
  console.log(res);
  this.formValue.reset();
  let close = document.getElementById("closeModel");
  close?.click();
  alert("added");
  this.getAllEmploy();
},
err => {
  alert("Error...!");
},
)}

getAllEmploy() {
this.empService.getEmploye().subscribe(res => {
  this.empolyeData = res;
});
}

deleteEmp(emp: any) {
this.empService.deleteEmploye(emp.id).subscribe(res => {
alert("Employee deleted");
this.getAllEmploy();
});
}
onEdit(emp: any ) {
this.showAdd = false;
this.showUpdate = true;
this.employModel.id = emp.id;
this.formValue.controls['employeeName'].setValue(emp.employeeName);
this.formValue.controls['employeeID'].setValue(emp.employeeID);
this.formValue.controls['email'].setValue(emp.email);
this.formValue.controls['department'].setValue(emp.department);
this.formValue.controls['password'].setValue(emp.password);
}
updateEmployeDetails() {

this.employModel.employeeName = this.formValue.value.employeeName;
this.employModel.employeeID = this.formValue.value.employeeID;
this.employModel.email = this.formValue.value.email;
this.employModel.department = this.formValue.value.department;
this.employModel.password = this.formValue.value.password;
this.empService.updateEmploye(this.employModel, this.employModel.id)
.subscribe(res => {
  alert("Employee Updated");
  this.formValue.reset();
  let close = document.getElementById("closeModel");
  close?.click();
  this.getAllEmploy();
})
}
show(emp:any) {
this.empService.showEmploye(emp.id).subscribe(res => {
   console.log(res)
   this.showEmpolyeData = res;
  });
}
//
  login() {
    if(this.email == "admin@gmail.com" && this.password == "admin123") {
      console.log("Admin login Success");
      this.router.navigateByUrl('admin');
    } else {
      alert("Invalid Username and Password..!");
    }
  }

  buttonClick() {
    console.log("button clicked")
  }



}
