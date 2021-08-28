import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/model/customer';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private http:HttpClient) { }

  //HttpClient --> HttpClientModule --> @angular/commons/http
    //url http://localhost:8899/employee/add, e ->Http Calls
    createCustomer(c:Customer):Observable<Customer>{
      console.log("welcome"+c.userName+" "+c.email+c.countryCode+c.mobile+c.jobType+c.userPassword);
      return this.http.post<Customer>("http://localhost:9000/customer/add ",c);
    }
}
