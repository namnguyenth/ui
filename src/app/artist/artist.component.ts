import { Component, OnInit, ViewChild } from '@angular/core';
import { ArtistModalComponent } from './artist-modal/artist-modal.component';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  @ViewChild('modal') modal!: ArtistModalComponent;
  nations: any = []
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

  constructor() { }

  ngOnInit(): void {
    this.fakeData();
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

}
