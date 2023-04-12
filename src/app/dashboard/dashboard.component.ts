import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  follow_list = [1, 2, 4, 5, 6]
  constructor() { }

  ngOnInit(): void {
  }

  clickFollow(item: number) {
    const index = this.follow_list.indexOf(item);
    this.follow_list.splice(index, 1); // 2nd parameter means remove one item only
    console.log(this.follow_list);

  }

}
