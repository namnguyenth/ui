import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-nation-modal',
  templateUrl: './nation-modal.component.html',
  styleUrls: ['./nation-modal.component.css']
})
export class NationModalComponent implements OnInit {

  constructor(private sharedServices: SharedService,
  ) { }

  nation = {
    name: null,
    created_date: new Date()?.toISOString(),
    created_by: '1',
    updated_date: null,
    updated_by: null,
    deleted_date: null,
    deleted_by: null
  }

  ngOnInit(): void {
  }

  test() {
    debugger
    console.log(this.nation);
  }

  createNation() {
    this.sharedServices.createNation(this.nation).subscribe(
      data => {
        return
      }
    )
  }

}
