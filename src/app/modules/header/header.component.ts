import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  name!:any;
  constructor(private router:Router){
    this.name = localStorage.getItem('Name');
    console.log("name"+this.name);
  }

  disconnect(){
    localStorage.removeItem('token-access');
    localStorage.removeItem('Name');
    this.router.navigateByUrl('/auth');
  }
}
