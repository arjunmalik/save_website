import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeImages } from './components/homePage/homeImages/homeImages.component';
import { HomePage } from './components/homePage/homePage.component';
import { ProjectPage } from './components/projectPage/projectPage.component';

const routes: Routes = [{path: 'home', component: HomePage},
                        {path: 'projects', component: ProjectPage},
                        {path: 'about-us', component: ProjectPage},
                        {path: 'contact', component: ProjectPage},
                        {path: 'know-more', component: ProjectPage},
                        {path: '**', redirectTo: '/home'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
