import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { ListTeamComponent } from './list-team/list-team.component';

import {TableModule} from "primeng/table";
import {CalendarModule} from "primeng/calendar";
import {SliderModule} from "primeng/slider";
import {DialogModule} from "primeng/dialog";
import {MultiSelectModule} from "primeng/multiselect";
import {ContextMenuModule} from "primeng/contextmenu";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {InputTextModule} from "primeng/inputtext";
import {ProgressBarModule} from "primeng/progressbar";
import {HttpClientModule} from "@angular/common/http";
import {FileUploadModule} from "primeng/fileupload";
import {ToolbarModule} from "primeng/toolbar";
import {RatingModule} from "primeng/rating";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ConfirmationService, MessageService} from "primeng/api";

import { DetailTeamModule } from '../detail-team/detail-team.module';
import { DetailComponent } from '../detail-team/detail/detail.component';
import { TeamStudentComponent } from './team-student/team-student.component';
import { TeamByIdComponent } from './team-by-id/team-by-id.component';



@NgModule({
  declarations: [
    ListTeamComponent,
    TeamStudentComponent,
    TeamByIdComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    TableModule,HttpClientModule,ReactiveFormsModule,FormsModule,
    DetailTeamModule
  ],
  providers: [ MessageService, ConfirmationService,DetailComponent],
  exports:[],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class TeamModule { }
