import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUnivComponent} from "./list-univ/list-univ.component";


const routes: Routes = [
  {path:'list',component:ListUnivComponent},
  {path:'list/students/:id',  loadChildren: () => import('../student/student.module').then(m => m.StudentModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
