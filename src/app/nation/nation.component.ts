import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { NationModalComponent } from './nation-modal/nation-modal.component';

@Component({
  selector: 'app-nation',
  templateUrl: './nation.component.html',
  styleUrls: ['./nation.component.css']
})
export class NationComponent implements OnInit {
  @ViewChild('modal') modal!: NationModalComponent;
  nations: any = []
  constructor(
    private sharedServices: SharedService,
  ) { }

  fakeData() {
    this.nations = [
      {
        name: 'VN',
        created_date: new Date()?.toISOString(),
        created_by: 'admin',
        updated_date: new Date()?.toISOString(),
        updated_by: 'admin',
        deleted_date: null,
        deleted_by: null
      },
      {
        name: 'CN',
        created_date: new Date()?.toISOString(),
        created_by: 'admin',
        updated_date: new Date()?.toISOString(),
        updated_by: 'admin',
        deleted_date: null,
        deleted_by: null
      },
      {
        name: 'FR',
        created_date: new Date()?.toISOString(),
        created_by: 'admin',
        updated_date: new Date()?.toISOString(),
        updated_by: 'admin',
        deleted_date: null,
        deleted_by: null
      },
      {
        name: 'US',
        created_date: new Date()?.toISOString(),
        created_by: 'admin',
        updated_date: new Date()?.toISOString(),
        updated_by: 'admin',
        deleted_date: null,
        deleted_by: null
      },
      {
        name: "UK",
        created_date: new Date()?.toISOString(),
        created_by: 'admin',
        updated_date: new Date()?.toISOString(),
        updated_by: 'admin',
        deleted_date: null,
        deleted_by: null
      },
      {
        name: 'VN',
        created_date: new Date()?.toISOString(),
        created_by: 'admin',
        updated_date: new Date()?.toISOString(),
        updated_by: 'admin',
        deleted_date: null,
        deleted_by: null
      },
      {
        name: 'CN',
        created_date: new Date()?.toISOString(),
        created_by: 'admin',
        updated_date: new Date()?.toISOString(),
        updated_by: 'admin',
        deleted_date: null,
        deleted_by: null
      },
      {
        name: 'FR',
        created_date: new Date()?.toISOString(),
        created_by: 'admin',
        updated_date: new Date()?.toISOString(),
        updated_by: 'admin',
        deleted_date: null,
        deleted_by: null
      },
      {
        name: 'US',
        created_date: new Date()?.toISOString(),
        created_by: 'admin',
        updated_date: new Date()?.toISOString(),
        updated_by: 'admin',
        deleted_date: null,
        deleted_by: null
      },
      {
        name: "UK",
        created_date: new Date()?.toISOString(),
        created_by: 'admin',
        updated_date: new Date()?.toISOString(),
        updated_by: 'admin',
        deleted_date: null,
        deleted_by: null
      },
    ]
  }

  ngOnInit(): void {
    // this.getPerson();
    this.fakeData()
  }

  edit(item?: any) {
    this.modal.show(item);
  }

  create() {
    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }

  getPerson() {
    this.sharedServices.getNations().subscribe(
      data => {
        this.nations = data;
      }
    )
  }

}
