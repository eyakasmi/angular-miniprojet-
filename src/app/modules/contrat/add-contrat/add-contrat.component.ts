import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { specialite } from 'src/app/shared/models/specialite';
import { ContratService } from 'src/app/shared/services/contrat/contrat.service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContractComponent implements OnInit {

  idStudent : number;

  constructor(private routerNav:Router,private contratService:ContratService,private router:ActivatedRoute){
    console.log("l 'enum"+Object.values(specialite));
    this.idStudent = this.router.snapshot.params['id'];

  }
  ngOnInit(): void {
    this.addContratForm.value.archive = "false";
    console.log("archived value"+this.addContratForm.value.archive);
    console.log("typeof archive"+typeof(this.addContratForm.value.archive));
  }

  public specialites = Object.values(specialite).filter(value => typeof value === 'string');
  addContratForm = new FormGroup({
    dateDebutContrat:new FormControl('',Validators.required
    ),
    dateFinContrat:new FormControl('',Validators.required),
    specialite:new FormControl('',Validators.required),
    archive:new FormControl('',Validators.required),
  })

  addContrat(){
    console.log("date debut"+this.addContratForm.value.dateDebutContrat);
    

    let data ={
      "dateDebutContrat":this.addContratForm.value.dateDebutContrat,
      "dateFinContrat":this.addContratForm.value.dateFinContrat,
      "specialite":this.addContratForm.value.specialite,
      
      "archive":Boolean(this.addContratForm.value.archive),
      "idStudent":Number(this.idStudent)
    }
    console.log("typeof archive in data"+typeof(data.archive))
    this.contratService.addContratInUniverty(data).subscribe(res => console.log(res));
    this.routerNav.navigate(['/contrat/list',this.idStudent]);


  }
  
  



}
