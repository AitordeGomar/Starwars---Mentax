import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people;

  constructor(private swapi:ApiService) { }

  ngOnInit(): void {
    this.swapi.getType("people").subscribe((data)=>{
      this.people = data});
  }

}
