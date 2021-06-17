import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  email :string = "admin@gmail.com";
  password: string = "admin123";
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
}
