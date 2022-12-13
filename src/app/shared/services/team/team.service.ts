import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Equipe} from "../../models/equipe";
import {DetailEquipe} from "../../models/detailEquipe";
//import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  //private teamUrl = 'http://localhost:3000/equipes'
  Level: string[] = ['Junior', 'Senior', 'Expert'];
  constructor(private http: HttpClient) { }

  getAllTeams(){
    return this.http.get<Equipe[]>('http://localhost:3000/equipes');
  }

 
  deleteTeam(team:Equipe){
    return this.http.delete('http://localhost:3000/equipes/'+team.id);
  }

 
  addTeam(equipe: Equipe){
    return this.http.post('http://localhost:3000/equipes',equipe);
  }
  updateTeam(id:number,team :Equipe){
    return this.http.put('http://localhost:3000/equipes/'+id,team);
  }

  /*getTeamById(team:Equipe){
    return this.http.get<Equipe[]>('http://localhost:3000/equipes/'+team.id);
  }*/
  getTeamById(id:number){
    return this.http.get<Equipe>('http://localhost:3000/equipes/'+id);
  }

getDetailByIdUniv(idTeam: number){

    let params = new HttpParams().set('id', idTeam);
    return this.http.get<Equipe[]>('http://localhost:3000/equipes/', {params:params});
  }
}
