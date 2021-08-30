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
  helperServiceGet=new FormGroup({
    'helperService':new FormControl(),
    'location':new FormControl(),
    'countrycode':new FormControl(),
    'contact':new FormControl(),
    'describe':new FormControl(),
    'aadhar':new FormControl(),
  });

  constructor(private hs:HelperService) { }

  ngOnInit(): void {
  }
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
}
