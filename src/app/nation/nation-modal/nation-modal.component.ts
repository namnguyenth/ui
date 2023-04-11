import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NationComponent } from '../nation.component';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-nation-modal',
  templateUrl: './nation-modal.component.html',
  styleUrls: ['./nation-modal.component.css']
})
export class NationModalComponent implements OnInit {
  @Input() nation: any = {};

  constructor(private sharedServices: SharedService,
  ) { }

  data = {
    name: null,
    created_date: new Date()?.toISOString(),
    created_by: '1',
    updated_date: null,
    updated_by: null,
    deleted_date: null,
    deleted_by: null
  }

  ngOnInit(): void {
    this.clear();
  }

  show(item?: any) {
    if (item) {
      this.data.name = item.name;
      this.data.created_date = item.created_date;
      this.data.created_by = item.created_by;
      this.data.updated_date = item.updated_date;
      this.data.updated_by = item.updated_by;
      this.data.deleted_date = item.deleted_date;
      this.data.deleted_by = item.deleted_by;
    } else {
      this.clear();
    }
  }

  clear() {
    this.data.name = null;
    this.data.created_date = this.getCurrentDate();
    this.data.created_by = '1';
    this.data.updated_date = null;
    this.data.updated_by = null;
    this.data.deleted_date = null;
    this.data.deleted_by = null;
  }

  hide() {
    const modal = document.getElementById("kt_modal_add_nation");
    if (modal != null) {
      modal.style.display = 'none';
      $('.modal-backdrop')?.remove();
    }
  }

  createNation() {
    this.sharedServices.createNation(this.nation).subscribe(
      data => {
        return
      }
    )
  }

  getCurrentDate() {
    return new Date()?.toISOString();
  }

}
