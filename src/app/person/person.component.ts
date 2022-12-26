import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person_list: any = [
  ]
  constructor(private sharedServices: SharedService
  ) { }

  ngOnInit(): void {
    this.getDepartmentList()
  }

  getDepartmentList() {
    this.sharedServices.getPerson().subscribe(
      data => {
        this.person_list = data;
      }
    )
  }

}
