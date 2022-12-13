import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  name!:any;
  constructor(private http:HttpClient) {
    this.name = localStorage.getItem('Name');
  }



  getAllUsers():Observable<any>{
    return this.http.get<User>('http://localhost:3000/user');
  }
  getUserById(id:number):Observable<any>{
    return this.http.get<User>('http://localhost:3000/user/'+id)
  }

  modifyUser(id:number,user:User){
    return this.http.put('http://localhost:3000/user/'+id,user);
  }

  getUserByName():Observable<User[]>{
    let params = new HttpParams().set('username', this.name);
    console.log("username from storage in service",this.name)
    return this.http.get<User[]>('http://localhost:3000/user/', {params:params});
  }
}
