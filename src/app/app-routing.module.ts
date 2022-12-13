import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import {HomeComponent} from "./modules/home/home.component";

const routes: Routes = [

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  {path:'',component:HomeComponent, children: [
      {
        path: 'student',
        loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule)},
      {
        path: 'universite',
        loadChildren: () => import('./modules/universite/universite.module').then(m => m.UniversiteModule)},
        {
          path: 'departement',
          loadChildren: () => import('./modules/departement/departement.module').then(m => m.DepartementModule)},
        {
        path: 'contrat',
        loadChildren: () => import('./modules/contrat/contrat.module').then(m => m.ContratModule)},
      {
        path: 'team',
        loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule)},
        {
          path: 'profile',
          loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)},

      {
        path: 'detailTeam',
        loadChildren: () => import('./modules/detail-team/detail-team.module').then(m => m.DetailTeamModule)}
    ], canActivate:[AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
