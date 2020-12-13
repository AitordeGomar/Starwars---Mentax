import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from './services/api.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpecElementComponent } from './components/spec-element/spec-element.component';
import { SpecPageComponent } from './components/spec-page/spec-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
      {path: ' ', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: ':type/:id', component: SpecElementComponent},
      {path: ':type/page/:id', component: SpecPageComponent},
      {path: '**', component: HomeComponent}
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
