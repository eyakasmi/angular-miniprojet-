import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/shared/models/contrat';
import { Departement } from 'src/app/shared/models/departement';
import { Etudiant } from 'src/app/shared/models/etudiant';
import { User } from 'src/app/shared/models/user';
import { ContratService } from 'src/app/shared/services/contrat/contrat.service';
import { DepartmentService } from 'src/app/shared/services/department/department.service';
import { StudentService } from 'src/app/shared/services/student/student.service';
import { UserService } from 'src/app/shared/services/user/user.service';



@Component({
  selector: 'app-profile',
  templateUrl: './own-profile.component.html',
  styleUrls: ['./own-profile.component.css']
})
export class OwnProfileComponent implements OnInit{


  id!: number;
  student!: Etudiant;
  contrats!: Contrat[];
  departement!: Departement;
  user!:User;
  userArray!:User[];
  showChild?:boolean = false;
  buttonText?:String = "Edit Profile";


  constructor(private userService:UserService,private url:ActivatedRoute,private studentService:StudentService,private contratService:ContratService,private departementService:DepartmentService) {
    
  }

  ngOnInit(): void {
    this.id= this.url.snapshot.params['id'];
    this.userService.getUserByName().subscribe(res=>{this.userArray=res;console.log("in the own-profile",this.userArray[0].nom);this.user=this.userArray[0]});
    this.studentService.getStudentById(this.id).subscribe(res=>{this.student = res;this.departementService.getDepartementByIdUniv(res.id_univ).subscribe(res => console.log(res))});
    this.contratService.getContratsByStudent(this.id).subscribe(res => this.contrats = res)

  }

  show(){
    if(this.showChild == false)
    {
    this.showChild = true;
    this.buttonText = "Hide edit profile";
    
    }
    else{
      this.showChild = false;
      this.buttonText = "Edit Profile";
    }
  }

  addItem() {
    this.reloadData();
  }

  reloadData(){
    this.userService.getUserByName().subscribe(res=>{this.userArray=res;console.log("in the own-profile",this.userArray[0].nom);this.user=this.userArray[0]})
  }
  
  

  





}
