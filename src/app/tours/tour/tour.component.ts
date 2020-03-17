import { Component, OnInit } from '@angular/core';
import { TourService } from '../tour.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  tour:any;
  id:string;
  constructor(private tourService :TourService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.id=params.get('id');
    });
    this.tourService.getTour(this.id).subscribe(result=>{
      this.tour = result.data;
    })
  }

}
