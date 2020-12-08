import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from './services/api.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PeopleComponent } from './components/people/people.component';
import { FilmsComponent } from './components/films/films.component';
import { SpeciesComponent } from './components/species/species.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpecElementComponent } from './components/spec-element/spec-element.component';
import { SpecPageComponent } from './components/spec-page/spec-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetsComponent,
    PeopleComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent,
    NavbarComponent,
    SpecElementComponent,
    SpecPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"", component:HomeComponent},
      {path:"people", redirectTo:"/people/page/1", pathMatch:"full"},
      {path:":type/:id", component:SpecElementComponent},
      {path:":type/page/:id", component:SpecPageComponent},
      {path:"planets", redirectTo:"/planets/page/1", pathMatch:"full"},
      {path:"films", redirectTo:"/films/page/1", pathMatch:"full"},
      {path:"species", redirectTo:"/species/page/1", pathMatch:"full"},
      {path:"vehicles", redirectTo:"/vehicles/page/1", pathMatch:"full"},
      {path:"starships",redirectTo:"/starships/page/1", pathMatch:"full"},
      {path:"**", component:HomeComponent}
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
