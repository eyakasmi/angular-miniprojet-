import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrat } from '../../models/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private http: HttpClient) { }
  /*getContratByIdUniv(idContrat: number){

    let params = new HttpParams().set('id_univ', idContrat);
    return this.http.get<Contrat[]>('http://localhost:3000/departements/', {params:params});
  }*/

  getAllContrats(){
    return this.http.get<Contrat[]>(' http://localhost:3000/contrat');
  }

  addContratInUniverty(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/contrat/',data);
  }

  getContratById(id:number):Observable<any>{
    return this.http.get<Contrat>('http://localhost:3000/contrat/'+id);
  }

  getContratsByStudent(idStudent:number):Observable<Contrat[]>{
    let params = new HttpParams().set('idStudent', idStudent);
    return this.http.get<Contrat[]>('http://localhost:3000/contrat/', {params:params});
  }

  deleteContrat(contrat:Contrat){
    return this.http.delete('http://localhost:3000/contrat/'+contrat.id);
  }

  modifyContrat(id:number,contrat :Contrat){
    return this.http.put('http://localhost:3000/contrat/'+id,contrat);
  }
}
