import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../model/person';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  // person_list: Person[] = []
  person_list: any = [
    {
      first_name: "string",
      last_name: "string",
      email: "string",
      address: "string",
      phone: "string",
      // # language : number,
      // # country : number,
      // # company : number,
      // # currency : number,
      // # role : number,
      avatar: "string",
      created_date: Date.now(),
      created_user: "Admin",
      updated_date: Date.now(),
      updated_user: "Admin",
      is_deleted: false
    },
    
  ]
  result: any = [];
  constructor(
    private sharedServices: SharedService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // this.getPerson()
  }

  getPerson() {
    this.sharedServices.getPerson().subscribe(
      data => {
        this.result = data;
        this.person_list = this.result.data
      }
    )
  }

  view_detail() {
    this.router.navigate(['/person-detail']);
  }

}
