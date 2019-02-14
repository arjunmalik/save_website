import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeImages } from './components/homePage/homeImages/homeImages.component';
import { HomePage } from './components/homePage/homePage.component';
import { ProjectPage } from './components/projectPage/projectPage.component';
import { AboutUs } from './components/aboutUs/aboutUs.component';
import { KnowMore } from './components/knowMore/knowMore.component';
import { TestimonialPage } from './components/testimonialPage/testimonialPage.component';


const routes: Routes = [{path: 'home', component: HomePage},
                        {path: 'projects', component: ProjectPage},
                        {path: 'about-us', component: AboutUs},
                        {path: 'contact', component: KnowMore},
                        {path: 'know-more', component: KnowMore},
                        {path: 'testimonial', component: TestimonialPage},
                        {path: '**', redirectTo: '/home'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
