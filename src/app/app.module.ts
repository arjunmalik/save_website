import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeImages } from './components/homeImages/homeImages.component';
import { HomePage } from './components/homePage/homePage.component';
import { ImageProvider } from './services/imageProvider.service';
import { ImageSelector } from './directives/imageSelector.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeImages,
    ImageSelector,
    HomePage
  ],
  imports: [
    BrowserModule
  ],
  providers: [ImageProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
