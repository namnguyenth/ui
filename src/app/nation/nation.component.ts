import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nation',
  templateUrl: './nation.component.html',
  styleUrls: ['./nation.component.css']
})
export class NationComponent implements OnInit {
  nations: any = []
  constructor(
    private sharedServices: SharedService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPerson();
  }

  view_detail() {

  }

  getPerson() {
    this.sharedServices.getNations().subscribe(
      data => {
        this.nations = data
      }
    )
  }

}
