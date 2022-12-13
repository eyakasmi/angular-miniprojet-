import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginTest: Boolean = false;

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router){

  }

  loginForm = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  })

  login(){
    this.userService.getAllUsers().subscribe(res => {res.forEach((element:User) => {
      console.log("username info"+element.username+element.password);
      console.log("username info"+this.loginForm.value.username+this.loginForm.value.password);
      if (this.loginForm.value.username=== element.username && this.loginForm.value.password===element.password) {
        // connected !!
        // token qs1q1q21sq5s6q2q62sq3sq3s2q2s3q2sq6s5qs5s6sqs1
        localStorage.setItem('token-access',new Date().getTime().toString());
      localStorage.setItem('Name',this.loginForm.value.username.toString());
        this.loginTest = true
        // redirect to home
        
        
  
      }
    });
    if(this.loginTest){
      
      this.router.navigateByUrl('/');
    }else
    {
      alert("wrong username and password");
    }
  });
    
  }
}
