import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
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

}
