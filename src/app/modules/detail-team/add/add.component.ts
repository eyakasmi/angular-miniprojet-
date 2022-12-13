import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DetailEquipe } from 'src/app/shared/models/detailEquipe';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  detail!:DetailEquipe;
  @Input() detailFormParent?: DetailEquipe;
  url:any;

  @Output() notification = new EventEmitter<DetailEquipe>();
  constructor(private http:HttpClient) {
  }



  ngOnInit(){
    console.log(this.detailFormParent?.salle)
    if(this.detailFormParent !=null){
      this.detail=this.detailFormParent;
    }else{
      this.detail={
        id:0,
        salle:0,
        thematique:"",
        id_team:0
      };
    }
    console.log(this.detail);
  }
  notifparent(detail:DetailEquipe){
    this.notification.emit(detail);
    console.log(detail);
   }
}
