import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn:'root'
})
export class TourService{

    constructor(private http :HttpClient){}

    getAllTours(){
        return this.http.get<any>('https://natours-tourapp-vishal.herokuapp.com/api/v1/tours/');
    }
    getTour(id){
        return this.http.get<any>(`https://natours-tourapp-vishal.herokuapp.com/api/v1/tours/${id}`);
    }
}