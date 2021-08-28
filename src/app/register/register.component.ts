import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { HelperService } from 'src/data/helper.service';
import { Customer } from 'src/model/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // myRegisterForm: FormGroup ;
 myRegisterForm=new FormGroup({
  'username':new FormControl(),
  'email':new FormControl(),
  'countrycode':new FormControl(),
  'contact':new FormControl(),
  'jobtype':new FormControl(),
  'password':new FormControl(),
});
customer=new Customer();
  constructor(private hs:HelperService) { }

  ngOnInit(): void {
  // this.myRegisterForm=new FormGroup({
  //     'username':new FormControl(),
  //     'email':new FormControl(),
  //     'countrycode':new FormControl(),
  //     'contact':new FormControl(),
  //     'jobtype':new FormControl(),
  //     'password':new FormControl(),
  //   });
  }
onSubmit(){
  this.customer.userName=this.myRegisterForm.value.username;
  this.customer.email=this.myRegisterForm.value.email;
  this.customer.countryCode=this.myRegisterForm.value.countrycode;
  this.customer.mobile=this.myRegisterForm.value.contact;
  this.customer.jobType=this.myRegisterForm.value.jobtype;
  this.customer.userPassword=this.myRegisterForm.value.password;
  console.log(this.myRegisterForm)
   // customer object is ready create a sservice pass the object 
      // to the service  - HelperService
  this.hs.createCustomer(this.customer)
      .subscribe(
        response=>{console.log(response)},
        err=>{console.log(err)});
        this.myRegisterForm.reset();
        alert("Customer registered Successfully")
}
}
