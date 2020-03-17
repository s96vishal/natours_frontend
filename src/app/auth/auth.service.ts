import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
    providedIn:'root'
})

export class AuthService{
    constructor(private http :HttpClient){}
    token :string;
    signup(user : User){
        return this.http.post('http://127.0.0.1:3000/api/v1/users/signup',user);
    }
    duplicateEmail(email :string){
        return this.http.post('http://localhost:3000/api/v1/users/checkUser',email);
    }
    login(email :string,password :string){
        let userData ={
            email :email,
            password :password
        }
        return this.http.post('http://127.0.0.1:3000/api/v1/users/login',userData);
    }
    saveToken(token :string){
        this.token = token;
        localStorage.setItem('jwt',token);
    }
    clearToken(){
        localStorage.removeItem('jwt');
        this.token =null;
    }
    logout(){
        this.clearToken();
    }
}