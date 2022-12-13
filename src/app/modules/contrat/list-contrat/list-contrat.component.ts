import {Component, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Contrat } from 'src/app/shared/models/contrat';
import { Etudiant } from 'src/app/shared/models/etudiant';
import { specialite } from 'src/app/shared/models/specialite';
import { ContratService } from 'src/app/shared/services/contrat/contrat.service';
import { StudentService } from 'src/app/shared/services/student/student.service';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  styleUrls: ['./list-contrat.component.css']
})

export class ListContratComponent {

  student!: Etudiant;
  productDialog?: boolean;
  contratDialog?:boolean = false;
  products: any[] =[];
  contrats:Contrat[]=[];
  contratDriven!: Contrat;
  product?: any;
  @ViewChild('dt') dt: Table | undefined;
  selectedProducts?: any[];
  myForm!: FormGroup;
  idStudent!:number;
  testString!:String;

  submitted?: boolean;
  public specialites = Object.values(specialite).filter(value => typeof value === 'string');

  constructor(private router:ActivatedRoute,private fb: FormBuilder,private contratService: ContratService, private messageService: MessageService, private confirmationService: ConfirmationService,private studentService : StudentService) 
  {
    this.idStudent = this.router.snapshot.params['id'];
  }

  ngOnInit() {
    
    this.getAllUniversites();
    this.myForm = this.fb.group({
      dateDebutContrat: ['', [Validators.required]],
      dateFinContrat:[''],
      specialite:[''],
      archive:['']

    });
  }
  get nomUniv(){
    return this.myForm?.get('nomUniv');
  }
  ResetForm(){
    this.myForm?.reset();
  }
 getAllUniversites(){
   this.contratService.getAllContrats().subscribe(
     response => {
      this.contrats = response.filter(value => value.idStudent == this.idStudent.valueOf());
      console.log(this.contrats);
    },
     error => console.log(error),
     () =>console.log("finish"))
 }
  
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  
  
  
  editContrat(contrat: Contrat) {
    this.contratDriven = contrat;
    console.log("contrat edit"+this.contratDriven.dateDebutContrat);
    this.contratDialog = true;
  }

  deleteContrat(contrat: Contrat) {
    this.studentService.getStudentById(contrat.idStudent).subscribe(etu => {
      
      this.confirmationService.confirm({
        message: 'Are you sure you want to delete contract of student' + etu.prenomE + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.contratService.deleteContrat(contrat).subscribe(
          ()=> {this.contrats=this.contrats.filter(univ=>univ.id !=contrat.id);this.getAllUniversites();}
          )
          //this.product = {};
          this.messageService.add({key: 'bc',severity:'success', summary: 'Successful', detail: 'Contrat Deleted', life: 3000});
        }
      });
    });
  }
  hideDialog() {
    this.contratDialog = false;
    this.submitted = false;
  }

  updateContrat(id:number){
    this.contratService.modifyContrat(id,this.contratDriven).subscribe(res => {console.log(res);this.getAllUniversites();});
    this.messageService.add({key: 'bc',severity:'success', summary: 'Successful', detail: 'Contrat est modifié', life: 3000});
    this.contratDialog=false;
    
  }


}
