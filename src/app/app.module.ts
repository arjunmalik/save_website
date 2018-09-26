import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeImages } from './components/homePage/homeImages/homeImages.component';
import { HomePage } from './components/homePage/homePage.component';
import { ProjectPage } from './components/projectPage/projectPage.component';

import { ImageProvider } from './services/imageProvider.service';
import { ImageSelector } from './directives/imageSelector.directive';

const routes: Routes = [{path: 'home', component: HomePage}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeImages,
    ImageSelector,
    HomePage,
    ProjectPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImageProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
