import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contrat } from 'src/app/shared/models/contrat';
import { Departement } from 'src/app/shared/models/departement';
import { Etudiant } from 'src/app/shared/models/etudiant';
import { Universite } from 'src/app/shared/models/universite';
import { User } from 'src/app/shared/models/user';
import { ContratService } from 'src/app/shared/services/contrat/contrat.service';
import { DepartmentService } from 'src/app/shared/services/department/department.service';
import { StudentService } from 'src/app/shared/services/student/student.service';
import { UniversiteService } from 'src/app/shared/services/universite/universite.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit{

  @Input() idUniversity!:number;
  @Output() newItemEvent = new EventEmitter<any>();
  id!: number;
  userArray!: User[];
  contrats!: Contrat[];
  departement!: Departement;
  updateForm: FormGroup;
  user!: User;
  


  constructor(private userService:UserService,private formBuilder:FormBuilder,private url:ActivatedRoute,private studentService:StudentService,private contratService:ContratService,private departementService:DepartmentService) {
    
    this.updateForm = this.formBuilder.group({
      nom: ['',Validators.required],
      prenom: ['',Validators.required],
      username: ['',Validators.required],
      password: ['',Validators.required],
      imageUrl:['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.id= this.url.snapshot.params['id'];
    this.userService.getUserByName().subscribe(res=>{this.userArray=res;console.log("user in update",this.userArray[0].nom);this.user=this.userArray[0]})
    
  }


  update(){
    this.data = {
      "nom":this.user.nom,
      "prenom":this.user.prenom,
      "username":this.user.username,
      "password":this.user.password,
      "imageUrl":this.base64Output,
    }
     console.log("aaaaaaaaa"+this.data);
    this.userService.modifyUser(this.user.id,this.data).subscribe(res=>{console.log(res);this.newItemEvent.emit()},error=>console.log("error",error));
  }



  base64Output! : any;
  data!:any;

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.base64Output = reader.result;
      console.log("the new image url",this.base64Output);
      
    
    },false);
    if(file){
      reader.readAsDataURL(file);
    }
  }
  


  

  


  
  

  





}