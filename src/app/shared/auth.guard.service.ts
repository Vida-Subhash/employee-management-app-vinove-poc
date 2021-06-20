import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { EmployeeService } from './employee.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private empService: EmployeeService
    ) {}

    canActivate(): boolean {

   if (this.empService.loggedIn()) {
            // authorised so return true
            return true;
        } else {
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
        }
    }
}
