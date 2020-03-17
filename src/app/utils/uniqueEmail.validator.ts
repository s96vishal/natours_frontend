import { Injectable } from "@angular/core";
import { AsyncValidator, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Injectable({
    providedIn:'root'
})

export class UniqueEmailValidator implements AsyncValidator{
    constructor(private authService :AuthService){}
    
    validate(control :AbstractControl) :Promise<any> |Observable<any>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    if(control.value ==='s96viky@gmail.com')
                    {   
                        resolve({'duplicateUser' :true})
                    }
                    resolve(null);
                },3000);
            })
    }
}