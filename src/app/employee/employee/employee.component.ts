import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  FirstName:string='';
  MiddleName:string='';
  LastName:string='';
  Age:string='';
  Gender:string='';
  Birthday:string='';
  Address1:string='';
  Address2:string='';
  Pincode:any=''

  constructor() { }

  ngOnInit(): void {
  }
  submit(form:NgForm){
    console.log(form)
    console.log(form.value)

  }

}
