import { Component, OnInit, ViewChild, Attribute, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';
import { AuthService } from '../auth.service';
import { passwordMatch, userNameTaken } from 'src/app/utils/custom.validators';
import { UniqueEmailValidator } from 'src/app/utils/uniqueEmail.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  createAccount ="Sign Up";
  status='';
  constructor(private authService :AuthService, private uniqueValidator :UniqueEmailValidator) {}
  signupForm = new FormGroup({
    name :new FormControl('',[Validators.required]),
    username :new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email],this.uniqueValidator.validate),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    passwordConfirm:new FormControl('',[Validators.required])
  },{
    validators: passwordMatch('password','passwordConfirm')
  });

  ngOnInit() {
   this.signupForm.statusChanges.subscribe((result)=>{
     console.log(result);
     this.status=result;
   })
  }
  onSubmit(){
    if(!this.signupForm.valid){
      return;
    }
    let user :User ={
      name :this.signupForm.value.name,
      username :  this.signupForm.value.username,
      email :this.signupForm.value.email,
      password :this.signupForm.value.password,
      passwordConfirm:this.signupForm.value.passwordConfirm
    };
    this.createAccount ="Processing...";
    this.authService.signup(user).subscribe(result=>{ 
      console.log(result);
    })      
    this.createAccount ="Sign Up";
  }
}
