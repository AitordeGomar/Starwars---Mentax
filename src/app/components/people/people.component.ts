import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  currentPage:number=1;
  people;
  searchPage;

  constructor(private swapi:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.swapi.getType("people").subscribe((data)=>{
      this.people = data});
  }

  // clPage(param){
  //   this.searchPage = "";
  //   this.swapi.getPage("people",param).subscribe((data)=>{
  //     this.searchPage = data});
    
  //   this.router.navigate(["people"+"/page", param]);
  // }



}
