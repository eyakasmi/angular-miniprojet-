import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListStudentsComponent} from "./list-students/list-students.component";
import {ProfileComponent} from "./profile/profile.component";


const routes: Routes = [

  {path:'profile/:id',component:ProfileComponent},
  {path:'',component:ListStudentsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
