import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService,private router : Router) { }

  ngOnInit() {
  }
  onSubmit(form :NgForm){
    if(!form.valid){
      return; 
    }
    let email = form.value.email;
    let password = form.value.password;
    this.authService.login(email,password).subscribe(result=>{
      console.log(result);
      this.authService.saveToken(result["token"]);
      this.router.navigate(['']);
    })
  }
}
