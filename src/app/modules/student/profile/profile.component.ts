import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/shared/models/contrat';
import { Departement } from 'src/app/shared/models/departement';
import { Etudiant } from 'src/app/shared/models/etudiant';
import { Universite } from 'src/app/shared/models/universite';
import { ContratService } from 'src/app/shared/services/contrat/contrat.service';
import { DepartmentService } from 'src/app/shared/services/department/department.service';
import { StudentService } from 'src/app/shared/services/student/student.service';
import { UniversiteService } from 'src/app/shared/services/universite/universite.service';

import { StudentModule } from '../student.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{


  id!: number;
  student!: Etudiant;
  contrats!: Contrat[];
  contratCount!:number;
  departement!: Departement;
  university!: Universite;


  constructor(private universityService:UniversiteService,private url:ActivatedRoute,private studentService:StudentService,private contratService:ContratService,private departementService:DepartmentService) {
    
  }

  ngOnInit(): void {
    this.id= this.url.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(res=>{this.student = res;console.log("got the university id"+this.student.id_univ);this.universityService.getUniversityById(this.student.id_univ).subscribe(res=>{console.log("uni"+res);this.university=res});this.departementService.getDepartementByIdUniv(res.id_univ).subscribe(res => console.log(res))});
    this.contratService.getContratsByStudent(this.id).subscribe(res => {this.contrats = res;this.contratCount = this.contrats.length})
    

  }


  
  

  





}
