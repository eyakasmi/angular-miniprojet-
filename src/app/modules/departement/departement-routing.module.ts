import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartementComponent } from './list-departement/list-departement.component';

const routes: Routes = [
  { path: 'list/:id', component: ListDepartementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
