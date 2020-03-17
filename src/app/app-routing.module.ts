import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { OverviewComponent } from './tours/overview/overview.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TourComponent } from './tours/tour/tour.component';


const routes: Routes = [
  {path:'',component:OverviewComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'tour/:id',component:TourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
