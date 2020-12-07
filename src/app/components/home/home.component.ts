import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  planets;

  

  constructor(private swapi:ApiService){}
  
  
    ngOnInit(){
      this.swapi.getSWAPI().subscribe((data)=>{this.planets = data});
      this.planets=this.planets
    }
}
