import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContractComponent } from './add-contrat/add-contrat.component';
import {ListContratComponent} from "./list-contrat/list-contrat.component";

const routes: Routes = [
  {path:'list/:id',component:ListContratComponent},
  {path:'add/:id', component:AddContractComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
