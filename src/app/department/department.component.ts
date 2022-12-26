import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from "src/app/shared.service";
import { DepartmentModalComponent } from './department-modal/department-modal.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  result: any = [];
  departmentOutput = {
    DepartmentId: 0,
    DepartmentName: ""
  };
  DepartmentIdFilter: any;
  DepartmentNameFilter: any;

  constructor(
    private sharedServices: SharedService
  ) { }

  ngOnInit(): void {
    this.getDepartmentList();
  }

  getDepartmentList() {
    this.sharedServices.getDepartment().subscribe(
      data => {
        this.result = data;
      }
    )
  }

  addClick(item?: any) {

  }

  editClick(item?: any) {

  }

  deleteClick(item?: any) {

  }

}
