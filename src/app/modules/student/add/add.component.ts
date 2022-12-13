import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Etudiant} from "../../../shared/models/etudiant";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  student!:Etudiant;
  @Input() studentFromParent? :Etudiant ;
  url: any;

  @Output() notification = new EventEmitter<Etudiant>();
  constructor(private http:HttpClient) {

  }
  ngOnInit(){
    console.log(this.studentFromParent?.nomE)
 if(this.studentFromParent != null){
  this.student=this.studentFromParent;
 }else{
  this.student= {
    id:0,
    nomE:"",
    prenomE:"",
    option:"",
    id_univ:0,
    id_team:0
  };
 }
 console.log(this.student)
}
  notifparent(student:Etudiant){

   this.notification.emit(student);
   console.log(student);
  }


}
