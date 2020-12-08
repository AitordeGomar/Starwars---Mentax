import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films;

  constructor(private swapi:ApiService) { }

  ngOnInit(): void {
    this.swapi.getType("films").subscribe((data)=>{
      this.films = data});
  }
}
