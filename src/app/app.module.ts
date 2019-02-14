import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ListIcons } from './components/shared/listIcons/listIcons.component';
import { HomeImages } from './components/homePage/homeImages/homeImages.component';
import { HomePage } from './components/homePage/homePage.component';
import { KnowMore } from './components/knowMore/knowMore.component';
import { ProjectPage } from './components/projectPage/projectPage.component';
import { AboutUs } from './components/aboutUs/aboutUs.component';
import { TestimonialPage } from './components/testimonialPage/testimonialPage.component';
import { Testimonial } from './components/testimonialPage/testimonial/testimonial.component';

import { ImageProvider } from './services/imageProvider.service';

import { ImageSelector } from './directives/imageSelector.directive';
import { ListSelector } from './directives/listSelector.directive';
import { CodemirrorModule } from 'ng2-codemirror';

import { FormsModule } from '@angular/forms';

const routes: Routes = [{path: 'home', component: HomePage}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeImages,
    ImageSelector,
    HomePage,
    ProjectPage,
    ListIcons,
    ListSelector,
    AboutUs,
    KnowMore,
    TestimonialPage,
    Testimonial
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CodemirrorModule,
    FormsModule
  ],
  providers: [ImageProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
