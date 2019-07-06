import { Component, Input, OnInit } from '@angular/core';
import {MainService} from '../share/main.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: {
    id: number,
    name: string,
    description: string,
    subdepartments: { id: number, name: string, description: string }[]
}[];

subdepartments: { name: string, description: string }[];

  constructor(public mainService: MainService) { }

  selectDepartment(i) {
    this.mainService.open.emit(false);
    this.subdepartments = this.departments[i].subdepartments;
}


  ngOnInit() {

    this.departments = this.mainService.departments;
  }
 
}

