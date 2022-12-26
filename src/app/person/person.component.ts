import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../model/person';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person_list: Person[] = []
  result: any = [];
  constructor(
    private sharedServices: SharedService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPerson()
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
