import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Etudiant} from "../../models/etudiant";
import {Universite} from "../../models/universite";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  getStudentByIdUniv(idUniv: number){

    let params = new HttpParams().set('id_univ', idUniv);
    return this.http.get<Etudiant[]>('http://localhost:3000/etudiants/', {params:params});
  }
    addStudent(student:Etudiant){
    return this.http.post('http://localhost:3000/etudiants',student);
  }
  modifyStudent(id:number,student:Etudiant){
    return this.http.put('http://localhost:3000/etudiants/'+id,student);
  }
  delete(student:Etudiant){
    return this.http.delete('http://localhost:3000/etudiants/'+student.id);
  }
  getStudentById(idStudent: number):Observable<Etudiant>{
    return this.http.get<Etudiant>('http://localhost:3000/etudiants/'+idStudent)
  }

  getStudentByIdTeam(idTeam: number){

    let params = new HttpParams().set('id_team', idTeam);
    return this.http.get<Etudiant[]>('http://localhost:3000/etudiants/', {params:params});
  }

  getAllStudent():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>('http://localhost:3000/etudiants/')
  }


}
