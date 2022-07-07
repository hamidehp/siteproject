import { HomeSliderResponse } from './../../../DTOs/HomeSliderResponse';
import { Data } from '@angular/router';
import { SliderService } from './../../../services/slider.service';
import { Slider } from './../../../DTOs/Slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  private Sliders:Slider[]=[];
  constructor(
    private SliderService:SliderService
  ) { }

  ngOnInit(): void {
   // this.SliderService.getCurrentSliders().subscribe(Sliders =>{

   // if (this.Sliders==null)
  //{
    this.SliderService.getSliders().subscribe(data=> this.Sliders);
  //  }
 // else{
  //  this.Sliders=Sliders;
  //}
 // });
  }

}
