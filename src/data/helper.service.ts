import { Injectable } from '@angular/core';
import { HttpClient, HttpContextToken } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from 'src/model/customer';
import { Helper } from 'src/model/helper';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  

  constructor(private http:HttpClient) { }
    private userEmail:String='';
    // public set email(v : string) {
    //   this.userEmail = v;
    // }
    location:any=localStorage.getItem('local');
    LoggedIn(){
      let email = localStorage.getItem("email");
   
      if(email==undefined || email === '' || email==null)
      return false;
      else
      return true;
   
     }
     logout(){
      localStorage.removeItem('email')
      return true;
    }
    getEmail(email:string){
      localStorage.setItem("email",email)
    }
    createCustomer(c:Customer):Observable<Customer>{
      console.log("welcome"+c.userName+" "+c.email+c.countryCode+c.mobile+c.jobType+c.userPassword);  
      this.userEmail=c.email;
      return this.http.post<Customer>("http://localhost:9000/customer/add ",c);
    }
    createHelper(h:Helper):Observable<Helper>{
  
      console.log("welcome"+h.helperService+" "+h.aadhar+h.countryCode+h.contact+h.location+h.userEmail);

      return this.http.post<Helper>("http://localhost:9000/helpers",h);
    }

    loginCustomer(c:Customer):Observable<Customer>{
      console.log("welcome"+c.userName+" "+c.email+c.countryCode+c.mobile+c.jobType+c.userPassword);
      return this.http.post<Customer>("http://localhost:9000/login",c);
    }

    getMechnical():Observable<Helper[]>{
      return this.http.get<Helper[]>("http://localhost:9000/mechnical");
   }
   getPlumber():Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/plumber");
   }
   getElectrician():Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/electrician");
   }
   getCarpenter():Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/carpenter");
   }
   getOther():Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/other");
   }
   getTutor():Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/tutor");
   }
   getUserData(email:any):Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:9000/user/"+email);
  }
  getMechanicByLocation(location:any):Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/mechanic/"+location);
   }
   getPlumberByLocation(location:any):Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/plumber/"+location);
   }
   getCarpentarByLocation(location:any):Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/carpentar/"+location);
   }
   getTutorByLocation(location:any):Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/tutor/"+location);
   }
   getELectricianByLocation(location:any):Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/electrician/"+location);
   }
   getOtherByLocation(location:any):Observable<Helper[]>{
    return this.http.get<Helper[]>("http://localhost:9000/other/"+location);
   }

  
}
