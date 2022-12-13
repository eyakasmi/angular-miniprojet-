import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  name!:any;
  userArray!:User[];
  user!:User;

  constructor(private userService:UserService,private router:Router){
    
    this.name = localStorage.getItem('Name');
    this.userService.getUserByName().subscribe(res=>{this.userArray=res;this.user=this.userArray[0]});
    console.log("name"+this.name);
  }

  disconnect(){
    localStorage.removeItem('token-access');
    localStorage.removeItem('Name');
    this.router.navigateByUrl('/auth');
  }
}
