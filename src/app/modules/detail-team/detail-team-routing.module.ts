import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListDetailComponent} from "./list-detail/list-detail.component";
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from '../student/add/add.component';

const routes: Routes = [
  {path:'list',component:ListDetailComponent},
  {path:'detailById',component:DetailComponent},
  {path:'add',component:AddComponent}
  //{path:'list/students/:id', component:ListStudentsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailTeamRoutingModule { }
