import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

    loginForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl(),
    });


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this._v());
    }
  }
  _v() {
    return this.loginForm.value;
  }

}
