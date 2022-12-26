import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeesComponent } from './employees/employees.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: 'person', component: PersonComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'dashboard', component: DashboardComponent },
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
