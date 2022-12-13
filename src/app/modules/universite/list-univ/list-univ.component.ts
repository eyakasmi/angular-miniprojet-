import {Component, ViewChild} from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Table} from "primeng/table";
import {NgxSpinnerService} from "ngx-spinner";
import {Universite} from "../../../shared/models/universite";
import {UniversiteService} from "../../../shared/services/universite/universite.service";
@Component({
  selector: 'app-list-univ',
  templateUrl: './list-univ.component.html',
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  styleUrls: ['./list-univ.component.css']
})
export class ListUnivComponent {

  universiteDialog?:boolean;
  universites:Universite[]=[];
  universite?:any;
  @ViewChild('dt') dt: Table | undefined;
  myForm!: FormGroup;
  submitted?: boolean;

  constructor(private fb: FormBuilder,private spinner: NgxSpinnerService,private univService: UniversiteService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.spinner.show();
    this.getAllUniversites();
    this.myForm = this.fb.group({
      nomUniv: ['', [Validators.required, Validators.minLength(2)]],
    });
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
  get nomUniv(){
    return this.myForm?.get('nomUniv');
  }
  ResetForm(){
    this.myForm?.reset();
  }
  getAllUniversites(){
   this.univService.getAllUniversites().subscribe(
     response => {this.universites = response;
       console.log(this.universites);},
     error => console.log(error),
     () =>console.log("finish"))
 }
  openNew() {
    this.submitted = false;
    this.universiteDialog = true;
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  saveUniversite() {
    this.submitted = true;
    if (this.universite?.id) {
      this.univService.modifyUniversite(this.universite?.id,this.myForm?.value).subscribe(
        ()=>this.getAllUniversites()
      );
      this.messageService.add({key:'bc',severity:'success', summary: 'Successful', detail: 'universite Updated', life: 3000});
    }
    else {
      console.log(this.myForm?.value);
      this.universite=this.myForm?.value;
      console.log("rrrrrrrrrrrr"+this.universite);
      this.univService.addUniversite(this.myForm?.value).subscribe(
        ()=> this.universites=[...this.universites]
      );
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});

    }
    this.universiteDialog = false;
    this.universite = {};
    this.ResetForm();
    this.getAllUniversites();
  }
  editUniv(universite: Universite) {
    this.universite = {...universite};
    this.universiteDialog = true;
  }
  deleteUniv(universite: Universite) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete  ' + universite.nomUniv + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.univService.deleteUniversite(universite).subscribe(
        ()=> this.universites=this.universites.filter(univ=>univ.id !=universite.id)
        )
        //this.product = {};
        this.messageService.add({key: 'bc',severity:'success', summary: 'Successful', detail: 'Universite Deleted', life: 3000});
      }
    });
  }
  hideDialog() {
    this.universiteDialog = false;
    this.submitted = false;
  }


}
