import { Component, OnInit } from '@angular/core';
import { TourService } from '../tour.service';
import {faMapMarked,faUser,faClock,faFlag} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  private tours :any=[];
  error:string;
  mapmarker = faMapMarked;
  person =faUser;
  clock=faClock;
  flag=faFlag;
  constructor(private tourService :TourService) { }

  ngOnInit() {
    this.tourService.getAllTours().subscribe(result=>{
      console.log(result);
      this.tours=result.data.data;
    },err=>{
      this.error = err.message;
    })
  }

}
