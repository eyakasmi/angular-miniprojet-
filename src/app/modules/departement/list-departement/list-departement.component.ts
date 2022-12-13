import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable, ReplaySubject } from 'rxjs';
import { Departement } from 'src/app/shared/models/departement';

import { DepartmentService } from 'src/app/shared/services/department/department.service';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent {
  id!:number;
  departementDialog? : Boolean;
  departements:Departement[]=[];
  student?:any;
  showChild?:boolean = false;
  buttonText?:String = "Add new departement";
  departDriven!: Departement;
  myForm: FormGroup;



  
  
  

  constructor(private http:HttpClient,private service: ActivatedRoute,private formBuilder:FormBuilder,private departementService:DepartmentService, private messageService: MessageService,private confirmationService: ConfirmationService){
 
    this.id = this.service.snapshot.params['id'];
    this.getStudentsByIdUnivrsite(this.id);
    this.myForm = this.formBuilder.group({
      nomDepart: ['', [Validators.required,Validators.minLength(4)]],
      

    });
  }
  ngOnInit(){
   this.id= this.service.snapshot.params['id'];
   console.log(this.id);
   console.log(this.showChild);
  }
  getStudentsByIdUnivrsite(id:number){
    return this.departementService.getDepartementByIdUniv(this.id).subscribe(
      response=>{this.departements= response
        console.log(this.departements)}
    );
  }
  deleteDepartement(departement:Departement){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + departement.nomDepart + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.departementService.deletDepartement(departement).subscribe(
          ()=> this.departements=this.departements.filter(stud=>stud.id !=departement.id)
        )
        //this.product = {};
        this.messageService.add({key: 'bc',severity:'success', summary: 'Successful', detail: 'Departement Deleted', life: 3000});
      }
    });

  }

  editDepart(depart: Departement) {
    this.departDriven = depart;
    console.log("contrat edit"+this.departDriven.nomDepart);
    this.departementDialog = true;
  }

  deleteDepart(depart:Departement){
    this.departementService.getDepartementById(depart.id).subscribe(depart => {
      
      this.confirmationService.confirm({
        
        message: 'Are you sure you want to delete departement avec le nom' + depart.nomDepart + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.departementService.deletDepartement(depart).subscribe(
          ()=> {console.log("deleted");this.reloadData()}
          )
          //this.product = {};
          this.messageService.add({key: 'bc',severity:'success', summary: 'Successful', detail: 'Departement Deleted', life: 3000});
        }
      });
      });
  }


  show(){
    if(this.showChild == false)
    {
    this.showChild = true;
    this.buttonText = "Hide addition";
    
    }
    else{
      this.showChild = false;
      this.buttonText = "Add new departement";
    }
  }

  reloadData() {
    this.departementService.getDepartementByIdUniv(this.id).subscribe((data) => {
      this.departements= data
        console.log(this.departements)
      });
  }

  updateDepart(id:number){
      this.departementService.modifyDepart(id,this.departDriven).subscribe(res => {res;this.reloadData();});
      this.messageService.add({key: 'bc',severity:'success', summary: 'Successful', detail: 'Contrat est modifié', life: 3000});
      this.departementDialog=false;
      
  }

  addItem() {
    this.reloadData();
  }

  


  
  
  
}