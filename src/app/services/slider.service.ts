import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { __values } from 'tslib';
import { HomeSliderResponse } from '../DTOs/HomeSliderResponse';
import { Slider } from '../DTOs/Slider';


@Injectable({
  providedIn: 'root'
})
export class SliderService {
 // private homeSlider:BehaviorSubject<Slider[]> =new BehaviorSubject<Slider[]>([])
  
  constructor( private http:HttpClient) { }
  
  public getSliders():Observable<HomeSliderResponse>{
    return this.http.get<HomeSliderResponse>('https://localhost:44390/api/Sliders');
  }

  //public getCurrentSliders():Observable<Slider[]>{
   // return this.homeSlider;
  //}

  //public SetCurrentSliders(Sliders:Slider[]){
   //return this.homeSlider.next(Sliders);
  //}
}


