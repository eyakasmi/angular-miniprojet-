import { Component } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {Etudiant} from "../../../shared/models/etudiant";
import {StudentService} from "../../../shared/services/student/student.service";
@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent {
  id?:any;
  shouldOpen?:boolean;
  students?:Etudiant[];
  student?:Etudiant ;
  constructor(private service: ActivatedRoute,private sanitizer: DomSanitizer,
              private studentServ:StudentService, private messageService: MessageService,
              private confirmationService: ConfirmationService){
    this.getStudentsByIdUnivrsite(this.id);
  }

  ngOnInit(){
    this.shouldOpen=false;
    this.students=[];
    this.id= this.service.snapshot.params['id'];
    console.log(this.id);
  }
  openAddForm(){
    this.shouldOpen = true;
  }

  addStudent(student:Etudiant){
    console.log(student.id)
    if(student.id==0){
      console.log("1")
      student.id_univ=this.id;
      this.studentServ.addStudent(student).subscribe(
        ()=>this.getStudentsByIdUnivrsite(this.id)
      );
      this.shouldOpen = false;
    }else{
    console.log("2")

    student.id_univ=this.id;
    this.studentServ.modifyStudent(student.id,student).subscribe(
      ()=>this.getStudentsByIdUnivrsite(this.id)
    );
    this.shouldOpen = false;
    this.student= {
      id:0,
      nomE:"",
      prenomE:"",
      option:"",
      id_univ:0,
      id_team:0
    };
    }
  }
  sendToFils(student:Etudiant){
    console.log("2")
    window.scroll(0,0);
    this.student={...student};
    this.shouldOpen=true;
  }
  getStudentsByIdUnivrsite(id:number){
    return this.studentServ.getStudentByIdUniv(this.service.snapshot.params['id']).subscribe(
      response=>{this.students= response
        console.log(this.students)}
    );
  }
  deleteStudent(student:Etudiant){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + student.nomE + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.studentServ.delete(student).subscribe(
          ()=> this.students=this.students?.filter(stud=>stud.id !=student.id)
        )
        this.messageService.add({key: 'bc',severity:'success', summary: 'Successful', detail: 'Universite Deleted', life: 3000});
      }
    });

  }

}
