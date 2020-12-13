import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private HTTP:HttpClient) { 
  }
  SWAPI = "https://swapi.dev/api/";

  //this call will return the properties of all elements 
   getSpecific(param:string, num:number){ 
    return this.HTTP.get(this.SWAPI+param+'/'+num+"/");
   }

   getPage(param:string, num:number){
     return this.HTTP.get(this.SWAPI+param+"/?page="+num+"/")
   }

   //call to get related elements
   getRelated(param:string){
    return this.HTTP.get("https://swapi.dev/api/"+param);
   }
}
