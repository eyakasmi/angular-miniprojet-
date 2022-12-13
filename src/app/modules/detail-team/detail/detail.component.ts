import { Component } from '@angular/core';
import { DetailEquipe } from 'src/app/shared/models/detailEquipe';
import { ActivatedRoute } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { TeamDetailService } from 'src/app/shared/services/teamDetail/team-detail.service';
import { TeamService } from 'src/app/shared/services/team/team.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  shouldOpen?:boolean;

  
  id?:any;
  det!: DetailEquipe;
  detail!: DetailEquipe;
  details:DetailEquipe[]=[];
  name:any;
 // team?:Equipe;
 teamname?: String;
 teamlevel?:String;

  exist?:Boolean;

 constructor( private activatedroute: ActivatedRoute, private teamService:TeamService, private detailService :TeamDetailService , 
  private messageService: MessageService,private confirmationService: ConfirmationService ) { 
    this.getDetailByIdTeam(this.id);
}


ngOnInit(){ 
  this.exist=true;
  console.log("test " + this.exist);
  
  this.shouldOpen=false;
  this.details=[];
  this.id= this.activatedroute.snapshot.params['id'];
  console.log("team id: " + this.id);
  
  this.teamService.getTeamById(this.id).subscribe(team => {
    this.teamname = team.nomEquipe;
    this.teamlevel = team.niveau;
    console.log("team name : "+ this.teamname)
  });
  //console.log("team " + this.team);
 

}
openAddForm(){
  this.shouldOpen = true;
}


addDetail(detail:DetailEquipe){
  console.log(detail.id)
  
  if(detail.id==0){
    console.log("ADD")
    detail.id_team=this.id;
    this.detailService.addDetail(detail).subscribe(
      ()=>this.getDetailByIdTeam(this.id)
    );
    this.shouldOpen = false;
    this.exist=false;
    
  }else{
  console.log("UPDATE");
  this.detail.id_team=this.id;
    this.detailService.updateDetail(detail.id,detail).subscribe(
      ()=>this.getDetailByIdTeam(this.id)
    );
    this.shouldOpen = false;
    this.detail= {
      id:0,
      salle:0,
      thematique:"",
      id_team:0
    };
  
  }
}

sendToFils(detail:DetailEquipe){
  console.log("2")
  window.scroll(0,0);
  this.detail={...detail};
  this.shouldOpen=true;
}


getDetailByIdTeam(id:number){
  return this.detailService.getDetailByIdTeam(this.activatedroute.snapshot.params['id']).subscribe(
    response=>{this.details= response
      console.log( this.details);
      this.details.forEach(element => {
        console.log("id det: "+ element.id)
        if(element.id!=0){
          this.exist=false;
          console.log("test "+ this.exist )
        }
      });
    });
      
}

deleteDetail(detail:DetailEquipe){
  this.confirmationService.confirm({
    message: 'Are you sure you want to delete this detail?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.detailService.delete(detail).subscribe(
        ()=> this.details=this.details.filter(det=>det.id !=detail.id)
      )
      //this.product = {};
      this.messageService.add({key: 'bc',severity:'success', summary: 'Successful', detail: 'Detail Deleted', life: 3000});
    }
  });

}



 

}
