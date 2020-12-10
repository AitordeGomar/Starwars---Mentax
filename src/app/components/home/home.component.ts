import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
people:any;
planets:any;
films:any;
species:any;
vehicles:any;
starships:any;
currentType;
  accData =[];
  dataGroup = Array();
  selectedPlanet = Array();
  group = Array(); 
  result;
  aux;

  i = 1;
  icount;

  

  constructor(private swapi:ApiService, private router:Router){

  }
  
  
    ngOnInit(){
      this.swapi.getType("people").subscribe((data)=>{
        this.people = data});
      this.swapi.getType("planets").subscribe((data)=>{
        this.planets = data});
      this.swapi.getType("films").subscribe((data)=>{
        this.films = data});
      this.swapi.getType("species").subscribe((data)=>{
        this.species = data});
      this.swapi.getType("vehicles").subscribe((data)=>{
        this.vehicles = data});
      this.swapi.getType("starships").subscribe((data)=>{
        this.starships = data});
    }


  click(param){
    this.currentType = "";
    this.currentType = param;
    switch(param){
      case "people": this.icount = this.people.count;break;
      case "planets": this.icount = this.planets.count;break;
      case "films": this.icount = this.films.count;break;
      case "vehicles": this.icount = this.vehicles.count;break;
      case "species": this.icount = this.species.count;break;
      case "starships": this.icount = this.starships.count;break;
      default: this.icount = this.planets.count;
    }

    for(this.i;this.i<=1000;this.i++){
      this.swapi.getSpecific(param,this.i).subscribe((data:any)=>{
        this.dataGroup.push(data);
        this.group.push(data.name || data.title);
        console.log(this.i);
      });
    }
    
    
  }

toSpecElement(param){

  console.log(param);
  for(this.i;this.i<=this.icount.count;this.i++){
    this.swapi.getSpecific(this.currentType,this.i).subscribe((data:any)=>{
      this.selectedPlanet = data;
    });
  }

  this.result = this.dataGroup.find(n=>n.name || n.title === param).url.toString().slice(-3,-1).split("/");
  
      this.router.navigate([this.currentType+'/'+this.result[this.result.length-1]+"/"])
    }

}