import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets

  constructor(private swapi:ApiService) { }

  ngOnInit(): void {
    this.swapi.getType("planets").subscribe((data)=>{
      this.planets = data});
  }

}
