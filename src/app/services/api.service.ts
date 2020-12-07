import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private HTTP:HttpClient) { 
  }
  SWAPI = "https://swapi.dev/api/planets/";

  getSWAPI(){
    return this.HTTP.get(this.SWAPI);
  }
}
