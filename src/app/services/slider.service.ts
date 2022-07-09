import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { BehaviorSubject, catchError, Observable, retry } from 'rxjs';
import { __values } from 'tslib';
import { HomeSliderResponse } from '../DTOs/HomeSliderResponse';
import { Slider } from '../DTOs/Slider';



@Injectable({
providedIn: 'root'
})
export class SliderService {
  
  //private homeSlider:BehaviorSubject<Slider[]> =new BehaviorSubject<Slider[]>([])
  public url:string='https://localhost:44390/api/Sliders';
  constructor( public http:HttpClient) { }
  
  // public getSliders():Observable<any>{
  
    
  //   return this.http.get<any[]>("https://localhost:44390/api/Sliders").subscribe(
  //     (success)=>{
        
  //     }
  //   );
    
  // }
  
  
  
 // public getCurrentSliders():Observable<Slider[]>{
 //   return this.homeSlider;
  //}

  //public SetCurrentSliders(Sliders:Slider[]){
  //return this.homeSlider.next(Sliders);
  //}
}



