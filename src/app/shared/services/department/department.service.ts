import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../../models/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  getDepartementByIdUniv(idUniv: number){

    let params = new HttpParams().set('id_univ', idUniv);
    return this.http.get<Departement[]>('http://localhost:3000/departements/', {params:params});
  }

  getDepartementById(id:number):Observable<any>{
    return this.http.get<Departement>('http://localhost:3000/departements/'+id);
  }

  addDepartementInUniverty(data:any):Observable<any>{
    console.log("nom",data.nomDepart)
    return this.http.post<any>('http://localhost:3000/departements/',data)
  }
  
  deletDepartement(departement:Departement){
    return this.http.delete('http://localhost:3000/departements/'+departement.id);
  }

  modifyDepart(id:number,depart:Departement){
    return this.http.put('http://localhost:3000/departements/'+id,depart);
  }
}
