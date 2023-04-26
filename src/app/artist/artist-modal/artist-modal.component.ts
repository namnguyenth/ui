import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-artist-modal',
  templateUrl: './artist-modal.component.html',
  styleUrls: ['./artist-modal.component.css']
})
export class ArtistModalComponent implements OnInit {
  @Input() artist: any = {};
  data = {
    // name: null,
    // created_date: new Date()?.toISOString(),
    // created_by: '1',
    // updated_date: null,
    // updated_by: null,
    // deleted_date: null,
    // deleted_by: null
  }
  nations:any = [];

  constructor(
    private sharedServices: SharedService,
  ) { }

  ngOnInit(): void {
    this.getNation();
  }

  show(item?: any) {
    // if (item) {
    //   this.data.name = item.name;
    //   this.data.created_by = item.created_by;
    //   this.data.updated_date = item.updated_date;
    //   this.data.updated_by = item.updated_by;
    //   this.data.deleted_date = item.deleted_date;
    //   this.data.deleted_by = item.deleted_by;
    // } else {
    //   this.clear();
    // }
  }

  clear() {
    // this.data.name = null;
    // this.data.created_by = '1';
    // this.data.updated_date = null;
    // this.data.updated_by = null;
    // this.data.deleted_date = null;
    // this.data.deleted_by = null;
  }

  hide() {
    const modal = document.getElementById("kt_modal_add_artist");
    if (modal != null) {
      modal.style.display = 'none';
      $('.modal-backdrop')?.remove();
    }
  }

  getNation() {
    this.sharedServices.getNations().subscribe(
      data => {
        this.nations = data;
      }
    )
  }
  
  test(){
    console.log(this.nations);
    
  }

}
