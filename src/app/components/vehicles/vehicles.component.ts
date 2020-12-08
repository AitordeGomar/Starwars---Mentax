import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles;

  constructor(private swapi:ApiService) { }

  ngOnInit(): void {
    this.swapi.getType("vehicles").subscribe((data)=>{
      this.vehicles = data});
  }
}
