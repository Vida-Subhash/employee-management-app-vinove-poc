import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {  ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
employee : {
  id: number,
  empid: string,
  employeeName: string,
  department: string,
  email: string,

} = {id: 0,
  empid: '',
  employeeName: '',
  department: '',
  email: '',
}
showData: any = {};
formValue!: FormGroup;
showLogoutBtn: boolean = true;
show!: boolean;
  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder,
    private toastr: ToastrService
    ) {  this.show = false;}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
     this.empService.showEmploye(id).subscribe( res => {
      console.log(res);
      // this.employee = res;
      this.showData = res;
 })
 this.showLogoutBtn = !!localStorage.getItem('token');

      // this.empService.showEmploye(1).subscribe( res => {
      //   this.showData = res;
      // })


      this.formValue = this.formbuilder.group({
        employeeName : ['', Validators.required],
        employeeID: ['', Validators.required],
        // email: ['', [Validators.email, Validators.required]],
        department: ['', Validators.required],
        // password: ['', Validators.required],
      });
    }

    onEdit( ) {
      this.formValue.controls['employeeName'].setValue(this.showData.employeeName);
      this.formValue.controls['employeeID'].setValue(this.showData.employeeID);
      this.formValue.controls['department'].setValue(this.showData.department);
      // this.formValue.controls['email'].setValue(this.showData.email);
      // this.formValue.controls['password'].setValue(this.showData.password);
      }


    updateEmployeDetails() {

      this.showData.employeeName = this.formValue.value.employeeName;
      this.showData.employeeID = this.formValue.value.employeeID;
      this.showData.department = this.formValue.value.department;
      // this.showData.email = this.formValue.value.email;
      // this.showData.password = this.formValue.value.password;
      this.empService.updateEmploye(this.showData, this.showData.id)
      .subscribe(res => {
        // alert("Employee Updated");
        this.toastr.success("Details Updated Successfully.");
        this.formValue.reset();
        let close = document.getElementById("closeModel");
        close?.click();
      })
      }

      password() {
        this.show = !this.show;
    }
    logout() {
      // console.log("Log Out Sucess");
      this.router.navigateByUrl('login');
      this.toastr.info("Logout Successfully.");
      localStorage.removeItem('token');
    }
  }


