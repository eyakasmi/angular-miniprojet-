import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Equipe} from "../../models/equipe";
//import { Observable } from 'rxjs';
import {DetailEquipe} from "../../models/detailEquipe";

@Injectable({
  providedIn: 'root'
})
export class TeamDetailService {
  constructor(private http: HttpClient) { }

  getDetailByIdTeam(idTeam: number){
    let params = new HttpParams().set('id_team', idTeam);
    return this.http.get<DetailEquipe[]>('http://localhost:3000/detailEquipe/', {params:params});
  }

  delete(detail:DetailEquipe){
    return this.http.delete('http://localhost:3000/detailEquipe/'+detail.salle);
  }
 
  addDetail(detail:DetailEquipe){
    return this.http.post('http://localhost:3000/detailEquipe',detail);
  }

  updateDetail(id: number, detail:DetailEquipe){

    return this.http.put('http://localhost:3000/detailEquipe/'+id,detail);
  }


    
  getAllDetail(){
    return this.http.get<DetailEquipe[]>('http://localhost:3000/detailEquipe');
  }

  /*
  addDetail(idTeam: number){
    let params = new HttpParams().set('id_Equipe', idTeam);

    return this.http.post('http://localhost:3000/detailEquipe',{params:params});
  }

    deleteDetail(idTeam:number){
    let params = new HttpParams().set('id_Equipe', idTeam);
    return this.http.delete('http://localhost:3000/detailEquipe/'+ {params:params});
  }

  
  updateDetail(idTeam: number, detail:DetailEquipe){
    let params = new HttpParams().set('id_Equipe', idTeam);

    return this.http.put('http://localhost:3000/detailEquipe/'+{params:params},detail);
  }
  
  */

}
