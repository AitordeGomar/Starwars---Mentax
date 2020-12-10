import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accData =[];
  planets = Array(); 
  result;
  aux;

  i = 1;
  icount;

  

  constructor(private swapi:ApiService, private router:Router){

  }
  
  
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

      this.swapi.getType("planets").subscribe((data)=>{
       // this.icount = data.count;
        this.icount = data;
      });   
console.log(this.planets)
    }


  click(){
    for(this.i;this.i<=this.icount.count;this.i++){
      this.swapi.getSpecific('planets',this.i).subscribe((data:any)=>{
        this.planets.push(data.name);
      });
    }
  }

toSpecElement(param){
  console.log(this.icount.results.find(n=>n.name === param));
  // this.result = this.icount.results.find(n=>n.name == param).url.toString().slice(-3,-1).split("/")[this.result.length-1];
  
      // this.router.navigate(["planets/"+this.result])
    }

}