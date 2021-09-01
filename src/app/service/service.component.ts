import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HelperService } from 'src/data/helper.service';
import { Helper } from 'src/model/helper';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  helpers:Helper[]=[];
  local:any;
  helperServiceGet=new FormGroup({
    'helperService':new FormControl(),
    'location':new FormControl(),
    'countrycode':new FormControl(),
    'contact':new FormControl(),
    'describe':new FormControl(),
    'aadhar':new FormControl(),
  });
  helperServiceLocation=new FormGroup({
    
    'location':new FormControl(),
  
  });

  constructor(private hs:HelperService) { }
  ngOnInit(): void {
  }
  onsub(){
    localStorage.setItem("local",this.state);
   
  }
  
 state:any;
  getMechanicl(){
    this.hs.getMechnical().subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
  }
  getPlumber(){
    this.hs.getPlumber().subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
  }
  getElectrician(){
    this.hs.getElectrician().subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
  }
  getCarpenter(){
    this.hs.getCarpenter().subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
  }
  getTutor(){
    this.hs.getTutor().subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
  }
  getOther(){
    this.hs.getOther().subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
  }
  getMechanicByLocation(){
    console.log(localStorage.getItem('local'))
    this.hs.getMechanicByLocation(localStorage.getItem('local')).subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
      this.helperServiceLocation.reset()
  }
  getPlumberByLocation(){
    console.log(localStorage.getItem('local'))
    this.hs.getPlumberByLocation(localStorage.getItem('local')).subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
      this.helperServiceLocation.reset()
  }
  getCarpentarByLocation(){
    console.log(localStorage.getItem('local'))
    this.hs.getMechanicByLocation(localStorage.getItem('local')).subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
      this.helperServiceLocation.reset()
  }
  getTutorByLocation(){
    console.log(localStorage.getItem('local'))
    this.hs. getTutorByLocation(localStorage.getItem('local')).subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
      this.helperServiceLocation.reset()
  }
  getElectricianByLocation(){
    console.log(localStorage.getItem('local'))
    this.hs.getELectricianByLocation(localStorage.getItem('local')).subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
      this.helperServiceLocation.reset()
  }
  getOtherByLocation(){
    console.log(localStorage.getItem('local'))
    this.hs.getOtherByLocation(localStorage.getItem('local')).subscribe(response=>{this.helpers=response},
      err=>{console.log(err)})
      this.helperServiceLocation.reset()
  }
  
 
}
