import { Component, ViewChild } from '@angular/core';
import { Equipe } from 'src/app/shared/models/equipe';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { TeamService } from 'src/app/shared/services/team/team.service';


@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
          width: 150px;
          margin: 0 auto 2rem auto;
          display: block;
      }
    `],
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent {


  id!:number;

  msg: string = '';
  clss: string = '';
 
  teamDialog?: boolean;

  teams: Equipe[]=[];

  team?:any;

  selectedTeams?: any;

  submitted?: boolean;

  ReactiveForm!: FormGroup;
  
  @ViewChild('dt') dt: Table | undefined;
  

  constructor(private fb: FormBuilder, private teamService: TeamService, private messageService: 
  MessageService, private confirmationService: ConfirmationService) { }
  
  ngOnInit() {
    this.getAllTeams();
    this.ReactiveForm= this.fb.group({
      nomEquipe:['', [Validators.required,Validators.minLength(2)]],
      niveau: ['']
    })
  }

  get nomEquipe() {
    return this.ReactiveForm.get('nomEquipe');
  }

  get niveau() {
    return this.ReactiveForm.get('niveau');
  }
  ResetForm(){
    this.ReactiveForm?.reset();
  }

  openNew() {
    this.team = {};
    this.submitted = false;
    this.teamDialog = true;
  }

  getAllTeams(){
    this.teamService.getAllTeams().subscribe(
      response => {this.teams = response;
        console.log(this.teams);},
      error => console.log(error),
      () =>console.log("finish"))
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }



  

  

  editTeam(team: Equipe) {
    this.team = {...team};
    this.teamDialog = true;
  }

  


  saveTeam() {
    this.submitted = true;
    if (this.team?.id) {
      this.teamService.updateTeam(this.team?.id,this.ReactiveForm?.value).subscribe(
        ()=>this.getAllTeams()
      );
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'Team Updated', life: 3000});
    }
    else {
      console.log(this.ReactiveForm?.value);
      this.team=this.ReactiveForm?.value;
      console.log(" "+this.team);
      this.teamService.addTeam(this.ReactiveForm?.value).subscribe(
        ()=> this.teams=[...this.teams]
      );
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'Team Created', life: 3000});

    }
    this.teamDialog = false;
    this.team = {};
    this.ResetForm();
    this.getAllTeams();
  }


  hideDialog() {
    this.teamDialog = false;
    this.submitted = false;
  }



  

  deleteTeam(team: Equipe) {
    console.log(team);
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + team.nomEquipe + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.teamService.deleteTeam(team).subscribe(
          ()=>this.teams = this.teams.filter(val => val.id != team.id)
        )
        this.messageService.add({key: 'bc',severity:'success', summary: 'Successful', detail: 'Team Deleted', life: 3000});
      }
    });
  }



  deleteSelectedTeams(slectedTeams:Equipe[]) {
    console.log(slectedTeams);
    if(slectedTeams && slectedTeams.length > 0) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          
          accept: () => {
            slectedTeams.forEach((element)=>{
            this.teamService.deleteTeam(element).subscribe(
              ()=> this.teams = this.teams.filter(val => val.id != element.id)
              
                )
            })
              
            this.messageService.add({key: 'ac',severity:'success', summary: 'Successful', detail: 'Team Deleted', life: 3000});
            slectedTeams.length=0;
          }   
        });
    }
    
   }
   
 
 
}

