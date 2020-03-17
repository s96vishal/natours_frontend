import { AbstractControl, ValidatorFn, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export function passwordMatch(control :string,matchingControl:string) :ValidatorFn{
    return (formGroup :FormGroup) :{[key :string]:any} | null =>{
        const password = formGroup.controls[control];
        const passwordConfirm = formGroup.controls[matchingControl];
      
        return passwordConfirm.value === password.value ? null : {'passwordMatch':true}
    }
}

export function userNameTaken(control :AbstractControl) :Promise<any> |Observable<any>{
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