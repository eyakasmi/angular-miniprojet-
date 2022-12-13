import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/shared/models/etudiant';
import { StudentService } from 'src/app/shared/services/student/student.service';

import { StudentModule } from '../student.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{


  id!: number;
  student!: Etudiant;

  constructor(private url:ActivatedRoute,private studentService:StudentService) {
    
  }

  ngOnInit(): void {
    this.id= this.url.snapshot.params['id'];
    console.log("data from service"+this.studentService.getStudentById(this.id).subscribe(res=>console.log(res)));
  }


  
  

  





}
