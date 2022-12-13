import { Component } from '@angular/core';
import { Etudiant } from 'src/app/shared/models/etudiant';
import { StudentService } from 'src/app/shared/services/student/student.service';

import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-team-student',
  templateUrl: './team-student.component.html',
  styleUrls: ['./team-student.component.css']
})
export class TeamStudentComponent {
  id?:any;
  shouldOpen?:boolean;
  students!:Etudiant[];
  student?:Etudiant ;
  NameStudents!:String[];
  nom?:string;

  studentsAll!:Etudiant[];


  
  teamDialog?: boolean;
  ReactiveForm!: FormGroup;
  submitted?: boolean;

  constructor(private activetaedRoute: ActivatedRoute,
    private studentService:StudentService, private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder){
      
      this.getStudentsByIdTeam(this.id);
  }

  ngOnInit(){
    this.shouldOpen=false;
    
    this.id= this.activetaedRoute.snapshot.params['id'];
    console.log(this.id);
    
  

    this.studentService.getAllStudent().subscribe(
      students => {
        students.forEach(element => {
          
          console.log("student name : "+element.prenomE);
        });
        this.studentsAll=students;
      }
    )
  }

  openAddForm(){
    this.shouldOpen = true;
  }


  
  sendToFils(student:Etudiant){
    console.log("2")
    window.scroll(0,0);
    this.student={...student};
    this.shouldOpen=true;
  }

  getStudentsByIdTeam(id:number){
    return this.studentService.getStudentByIdTeam(this.activetaedRoute.snapshot.params['id']).subscribe(
      response=>{this.students= response
        console.log(this.students)}
    );
  }

  deleteStudentFromTeam(student:Etudiant){

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + student.nomE + ' from this team ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        student.id_team=0;

        this.studentService.modifyStudent(student.id,student).subscribe(
          ()=>this.getStudentsByIdTeam(this.id)
        );
        
        this.messageService.add({key: 'bc',severity:'success', summary: 'Successful', detail: 'Universite Deleted', life: 3000});
      }
    });
  }



  getAllStudent(){
    this.studentService.getAllStudent().subscribe(
      response => {this.students = response;
        console.log(this.students);},
      error => console.log(error),
      () =>console.log("finish"))
      
  }


  saveStudent() {
    this.submitted = true;
    if (this.student?.id) {
      this.student.id_team=this.id;
      this.studentService.modifyStudent(this.student?.id,this.ReactiveForm?.value).subscribe(
        ()=>this.getStudentsByIdTeam(this.id)
      );
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'Team Updated', life: 3000});
    }
  }
/*
  notifparent(student?:Etudiant){
    this.notification.emit(student);
    console.log(student);
  }
  
  add(student:Etudiant){
    console.log(student.nomE)
    if(student.id_team!=this.id){
      console.log("new")
      student.id_team=this.id
      this.studentService.modifyStudent(student.id,student).subscribe(
        ()=>this.getStudentsByIdTeam(this.id)
      );
      this.shouldOpen = false;
    }else{

      console.log("Exist")
    }

      
  }
*/



 


}
