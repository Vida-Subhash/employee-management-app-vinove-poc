import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {  ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from '../app-routing.module';
// import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule

    // MaterialModule
  ]
})
export class LoginModule { }
