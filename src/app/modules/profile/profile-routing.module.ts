import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnProfileComponent } from './own-profile/own-profile.component';

const routes: Routes = [
  {path:'own-profile',component:OwnProfileComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
