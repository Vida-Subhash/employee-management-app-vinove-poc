import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// imported modules
import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeService } from './shared/employee.service';
import { AuthGuard } from './shared/auth.guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Modules
    LoginModule,
    AdminModule,
    EmployeeModule,
    ToastrModule.forRoot(
      {
       timeOut: 3000,
       preventDuplicates: true,
      }),
    BrowserAnimationsModule
  ],
  providers: [EmployeeService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
