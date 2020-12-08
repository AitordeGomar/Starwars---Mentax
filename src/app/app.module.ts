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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetsComponent,
    PeopleComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"", component:HomeComponent},
      {path:"people", component:PeopleComponent},
      {path:"planets", component:PlanetsComponent},
      {path:"films", component:FilmsComponent},
      {path:"species", component:SpeciesComponent},
      {path:"vehicles", component:VehiclesComponent},
      {path:"starships", component:StarshipsComponent},
      {path:"**", component:HomeComponent}
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
