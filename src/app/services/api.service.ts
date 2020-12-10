import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private HTTP:HttpClient) { 
  }
  SWAPI = "https://swapi.dev/api/";

  // getPeople(){
  //   return this.HTTP.get(this.SWAPI+"people");
  // }
  // getPlanets(){
  //   return this.HTTP.get(this.SWAPI+"planets");
  // }
  // getFilms(){
  //   return this.HTTP.get(this.SWAPI+"films");
  // }
  // getSpecies(){
  //   return this.HTTP.get(this.SWAPI+"species");
  // }
  // getVehicles(){
  //   return this.HTTP.get(this.SWAPI+"vehicles");
  // }
  // getStarships(){
  //   return this.HTTP.get(this.SWAPI+"starships");
  // }

  getType(param){
       return this.HTTP.get(this.SWAPI+param);
    }
  getPage(param, num){
      return this.HTTP.get(this.SWAPI+param+'?page='+num);
   }

   getSpecific(param:string, num:number){
    return this.HTTP.get(this.SWAPI+param+'/'+num+"/");
 }
  
}
