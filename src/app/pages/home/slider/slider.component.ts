import { HttpClient } from '@angular/common/http';
import { HomeSliderResponse } from './../../../DTOs/HomeSliderResponse';
import { Data } from '@angular/router';
import { SliderService } from './../../../services/slider.service';
import { Slider } from './../../../DTOs/Slider';
import { Component, OnInit } from '@angular/core';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-home-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  
   Sliders:Slider[]=[];
  
  constructor( public http:HttpClient) { 



  }

  ngOnInit() {
    return this.http.get<any[]>("https://localhost:44390/api/Sliders").subscribe(
      (success)=>{
        console.log('res',success)
      }
    )

   // this.SliderService.getCurrentSliders().subscribe(Sliders =>{

    //if (this.Sliders==null)
  //{
    debugger
   //this.SliderService.getSliders().subscribe(RES=> RES.data);
  //  this.SliderService.getSliders().subscribe(
  //   (success)=>{
  //     debugger
  //   },
    
  //  )
    //}
  //else{
    //this.Sliders=Sliders;
  //}
 //});
 
 
  }

}
