import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people;
  planets;
  films;
  species;
  vehicles;
  starships;

  

  constructor(private swapi:ApiService, private router:Router){}
  
  
    ngOnInit(){
      // this.swapi.getType("people").subscribe((data)=>{
      //   this.people = data.results});
      // this.swapi.getType("planets").subscribe((data)=>{
      //   this.planets = data.results});
      // this.swapi.getType("films").subscribe((data)=>{
      //   this.films = data.results});
      // this.swapi.getType("species").subscribe((data)=>{
      //   this.species = data.results});
      // this.swapi.getType("vehicles").subscribe((data)=>{
      //   this.vehicles = data.results});
      // this.swapi.getType("starships").subscribe((data)=>{
      //   this.starships = data.results});
    }

    clTo(param){
      this.router.navigate([param])
    }
}
