import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Universite} from "../../models/universite";


@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  constructor(private http:HttpClient) { }

  getAllUniversites(){
    return this.http.get<Universite[]>(' http://localhost:3000/universites');
  }
  deleteUniversite(universite:Universite){
    return this.http.delete('http://localhost:3000/universites/'+universite.id);
}
  addUniversite(univ: Universite){
    return this.http.post('http://localhost:3000/universites',univ);
}
  modifyUniversite(id:number,univ :Universite){
    return this.http.put('http://localhost:3000/universites/'+id,univ);
  }
}
