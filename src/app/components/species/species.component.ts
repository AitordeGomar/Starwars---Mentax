import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species;

  constructor(private swapi:ApiService) { }

  ngOnInit(): void {
    this.swapi.getType("species").subscribe((data)=>{
      this.species = data});
  }
}
