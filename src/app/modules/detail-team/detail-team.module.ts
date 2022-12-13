import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailTeamRoutingModule } from './detail-team-routing.module';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [
    ListDetailComponent,
    AddComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailTeamRoutingModule,
    ConfirmDialogModule,
    FormsModule,
  ],
  providers: [ MessageService, ConfirmationService],
  exports:[ListDetailComponent,DetailComponent,AddComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DetailTeamModule { }
