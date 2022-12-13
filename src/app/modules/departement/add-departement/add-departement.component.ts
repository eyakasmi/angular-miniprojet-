import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Departement } from 'src/app/shared/models/departement';
import { DepartmentService } from 'src/app/shared/services/department/department.service';

@Component({
  selector: 'app-add',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit{

  @Input() idUniversity!:number;
  @Output() newItemEvent = new EventEmitter<any>();
  idUniv!: number;
  departement!: Departement;
  department: Departement = new Departement();
  addDepart :any= FormGroup;

  
  constructor(private departementService:DepartmentService,private formBuilder: FormBuilder){}
  ngOnInit(): void {
    console.log("the university id"+this.idUniversity);
    console.log("type of the id",typeof(this.idUniversity));
    this.addDepart = this.formBuilder.group({
      nomDepart: ['',Validators.required,Validators.minLength(4)]
      
    })
  }



  add(){
    
    console.log("first of add"+this.addDepart.value);
    console.log("button clicked")
    this.idUniv=this.idUniversity;
    //this.department.idDepart=4;
    this.department.nomDepart = this.addDepart.value.nomDepart;
    this.addDepart.idDepart = 3;
    this.addDepart.idUniv = this.idUniversity;
    //this.department.idUniv = this.idUniversity;
    console.log("inside the form"+this.addDepart.value.nomDepart);
    //console.log("departement"+this.addDepart.idDepart);
    let data = {
      "id":this.addDepart.value.idDepart,
      "nomDepart":this.addDepart.value.nomDepart.toString(),
      "idUniv":this.addDepart.value.idUniv,
    }
    console.log("the data object"+data);
    this.departementService.addDepartementInUniverty(data).subscribe(res=>{console.log("response"+res);this.newItemEvent.emit();},(error: any) => {
      console.log(error);
      if(error.status ==401){
        alert("Login or Password not exist");
      }
    },
      () => {
      console.log("Finally clause");
    })
  }


}
