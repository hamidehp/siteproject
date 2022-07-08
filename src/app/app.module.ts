import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './SharedComponents/site-header/site-header.component';
import { SiteFooterComponent } from './SharedComponents/site-footer/site-footer.component';

import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { SpecialproductsComponent } from './pages/home/specialproducts/specialproducts.component';
import { NewproductsComponent } from './pages/home/newproducts/newproducts.component';
import { FavoriteProductsComponent } from './pages/home/favorite-products/favorite-products.component';
import { LatestNewsComponent } from './pages/home/latest-news/latest-news.component';
import { BrandsComponent } from './pages/home/brands/brands.component';
import { FormsModule } from '@angular/forms';
import { SliderService } from './services/slider.service';
import { HttpClientModule } from '@Angular/common/http';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    HomeComponent,
    SliderComponent,
    SpecialproductsComponent,
    NewproductsComponent,
    FavoriteProductsComponent,
    LatestNewsComponent,
    BrandsComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
  ],
  providers: [SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
