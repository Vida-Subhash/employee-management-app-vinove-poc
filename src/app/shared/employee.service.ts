import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
// import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //  loggedInd = new BehaviorSubject<boolean>(true);
  constructor(private http: HttpClient) { }
  postEmploye(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res:any ) => {
      return res;
    }));
  }
  getEmploye() {
    // this.LoggedIn = true;
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any ) => {
      return res;
    }));
  }

  updateEmploye(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/posts/"+id, data)
    .pipe(map((res:any ) => {
      return res;
    }));
  }

  deleteEmploye(id: number) {
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any ) => {
      return res;
    }));
  }

  showEmploye(id: number) {
    return this.http.get<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any ) => {
      return res;
    }));
  }
employeeLogin(email:string, password:string, employeeId:string) {

}
  loggedIn() {
    // this.loggedInd.next(!!localStorage.getItem('token'));
    return !!localStorage.getItem('token'); // to get Boolean Value use !!

  }


}
