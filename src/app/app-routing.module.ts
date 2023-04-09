import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonComponent } from './person/person.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectComponent } from './project/project.component';
import { NationComponent } from './nation/nation.component';

const routes: Routes = [
  { path: 'person', component: PersonComponent },
  { path: 'person-detail', component: PersonDetailComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'project-detail', component: ProjectDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'nation', component: NationComponent },
  {
    path: '**', pathMatch: 'full',
    component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
