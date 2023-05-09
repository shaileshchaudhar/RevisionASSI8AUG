import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employeeList:any []=[
    {fname:"Emp1",mname:"R.",lname:"Dsouza",age:22,gender:"Male",address1:"Mumbai",address2:"India",dob:"08/10/1999"},
    {fname:"Emp2",mname:"P.",lname:"Khan",age:23,gender:"Feale",address1:"Pune",address2:"India", dob:"7/6/1999"},
    {fname:"Emp3",mname:"s.",lname:"Arya",age:23,gender:"Male",address1:"Bengaluru",address2:"India",dob:"08/4/1999"},
    {fname:"Emp4",mname:"T.",lname:"Sharma",age:23,gender:"Fele",address1:"Delhi",address2:"India",dob:"5/7/1999"},
    {fname:"Emp5",mname:"Q.",lname:"Bhardwaj",age:23,gender:"Male",address1:"Noida",address2:"India",dob:"12/08/1999"}
  ];

}
