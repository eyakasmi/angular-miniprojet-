import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUnivComponent} from "../universite/list-univ/list-univ.component";
import {ListTeamComponent} from "./list-team/list-team.component";
import { ProfileComponent } from '../student/profile/profile.component';
import { TeamByIdComponent } from './team-by-id/team-by-id.component';

const routes: Routes = [
  {path:'list',component:ListTeamComponent},
  {path:'list/Details/:id',component:TeamByIdComponent},
  {path:'list/Details/:id/profile/:id',component:ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
