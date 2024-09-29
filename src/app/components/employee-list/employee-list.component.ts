import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddEmployeeComponent } from "../add-employee/add-employee.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, AddEmployeeComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  constructor (private router:Router){

  }

  emplist = [
    {id:1, name:'Hasibul Hasan',degination:'Jr.Software Engineer',phone:'01747979703'},
    {id:2, name:'Hasibul Hasan',degination:'Jr.Software Engineer',phone:'01747979703'},
    {id:3, name:'Hasibul Hasan',degination:'Jr.Software Engineer',phone:'01747979703'},
    {id:4, name:'Hasibul Hasan',degination:'Jr.Software Engineer',phone:'01747979703'},
    {id:5, name:'Hasibul Hasan',degination:'Jr.Software Engineer',phone:'01747979703'},
    {id:6, name:'Hasibul Hasan',degination:'Jr.Software Engineer',phone:'01747979703'},
    {id:7, name:'Hasibul Hasan',degination:'Jr.Software Engineer',phone:'01747979703'},
    {id:8, name:'Hasibul Hasan',degination:'Jr.Software Engineer',phone:'01747979703'},
  ];

  editEmployee(){
    this.router.navigateByUrl('add-employee');
  }
}
