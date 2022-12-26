import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-department-modal',
  templateUrl: './department-modal.component.html',
  styleUrls: ['./department-modal.component.css']
})
export class DepartmentModalComponent implements OnInit {
  @Input() departmentOutput: any;
  ModalTitle: string = '';
  isCreate: boolean = true;
  constructor(
    private sharedServices: SharedService
  ) { }

  ngOnInit(): void {
  }

  show(item: any = undefined) {
    this.clear();
    if (item) {
      // this.
    }


  }

  closeClick() {

  }
  addDepartment() {

  }
  updateDepartment() {

  }

  clear() {
    // this.modelKOL = new PageKOLDto();
    // this.getSuggestDoiTac('');
    // this.modelKOL.id = undefined;
    // // this.modelKOL.doiTacId = null;
    // this.doiTacObj = undefined
    // this.modelKOL.tenPage = undefined;
    // this.modelKOL.linkPage = undefined;
    // this.modelKOL.loaiPage = undefined;
    // this.modelKOL.ghiChu = undefined;
  }



}
