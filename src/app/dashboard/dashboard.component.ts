import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/data/helper.service';
import { Customer } from 'src/model/customer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 useremail:any;
  // customer: Customer = new Customer;
 customers:Customer[]=[];
  // myRegisterForm: FormGroup ;
 myUser=new FormGroup({
  'userName':new FormControl(),
  'email':new FormControl(),
  'countrycode':new FormControl(),
  'mobile':new FormControl(),
  'jobType':new FormControl(),
  'password':new FormControl(),
});
  constructor(private hs:HelperService,private _router:Router) { }
  ngOnInit(): void {
    this.useremail=localStorage.getItem('email')
  }
  
  getUserData(){
    console.log("Email Id : "+this.useremail)
    this.hs.getUserData(this.useremail).subscribe((response:any)=>{this.customers=response;console.log(this.customers,response)},
      err=>{console.log(err)})
  }

}
