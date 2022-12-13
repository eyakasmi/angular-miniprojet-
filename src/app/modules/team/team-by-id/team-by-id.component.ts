import { Component } from '@angular/core';
import { Etudiant } from 'src/app/shared/models/etudiant';

import {ActivatedRoute} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";
import { TeamService } from 'src/app/shared/services/team/team.service';
import { StudentService } from 'src/app/shared/services/student/student.service';

@Component({
  selector: 'app-team-by-id',
  templateUrl: './team-by-id.component.html',
  styleUrls: ['./team-by-id.component.css']
})
export class TeamByIdComponent {

  id?:any;

  students:Etudiant[]=[];
  student?:any;

  constructor(private service: ActivatedRoute, private team: TeamService,private studentServ:StudentService, private messageService: MessageService, 
    private confirmationService: ConfirmationService){
    }


    ngOnInit() {
      
    }
   /* getStudentsByIdTeam(id:number){
      return this.studentServ.getStudentByIdTeam(this.service.snapshot.params['id']).subscribe(
        response=>{this.students= response
          console.log(this.students)}
      );
    }*/

   

}
