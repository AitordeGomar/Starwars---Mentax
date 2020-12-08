import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starships;

  constructor(private swapi:ApiService) { }

  ngOnInit(): void {
    this.swapi.getType("starships").subscribe((data)=>{
      this.starships = data});
  }
}
