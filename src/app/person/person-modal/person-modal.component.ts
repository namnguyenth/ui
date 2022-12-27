import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-modal',
  templateUrl: './person-modal.component.html',
  styleUrls: ['./person-modal.component.css']
})
export class PersonModalComponent implements OnInit {
  person = {
    first_name: null,
    last_name: null,
    email: null,
    address: null,
    phone: null,
    avatar: null,
    created_date: null,
    created_user: null,
    updated_date: null,
    updated_user: null,
    is_deleted: null
  }
  is_submit = false;
  constructor() { }

  ngOnInit(): void {
    this.clear();
  }

  clear() {
    this.is_submit = false
    this.person.first_name = null,
    this.person.last_name = null,
    this.person.email = null,
    this.person.address = null,
    this.person.phone = null,
        // # language  = number,
    // # country  = number,
    // # company  = number,
    // # currency  = number,
    // # role  = number,
    this.person.avatar = null,
    this.person.created_date = null,
    this.person.created_user = null,
    this.person.updated_date = null,
    this.person.updated_user = null,
    this.person.is_deleted = null
  }

  submit() {
    this.is_submit = true;
    console.log(this.person)
  }

}
