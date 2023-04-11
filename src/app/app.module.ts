import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion'
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PersonComponent } from './person/person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { PersonModalComponent } from './person/person-modal/person-modal.component';
import { NationComponent } from './nation/nation.component';
import { NationModalComponent } from './nation/nation-modal/nation-modal.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistDetailComponent } from './artist/artist-detail/artist-detail.component';
import { ArtistModalComponent } from './artist/artist-modal/artist-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagenotfoundComponent,
    PersonComponent,
    PersonDetailComponent,
    ProjectComponent,
    ProjectDetailComponent,
    PersonModalComponent,
    NationComponent,
    NationModalComponent,
    ArtistComponent,
    ArtistDetailComponent,
    ArtistModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
