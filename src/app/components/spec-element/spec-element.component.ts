import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-spec-element',
  templateUrl: './spec-element.component.html',
  styleUrls: ['./spec-element.component.css']
})
export class SpecElementComponent implements OnInit {
  type;
  id;
  searchedElement ={};
  methods;
  

  constructor(private swapi:ApiService, private router:Router, private actRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.type = this.actRoute.snapshot.params['type'];
    this.id = this.actRoute.snapshot.params['id'];
    this.swapi.getSpecific(this.type,this.id).subscribe((data)=>{
      this.searchedElement = data});
    
  }

  click(){
    this.methods = Object.getOwnPropertyNames(this.searchedElement);
    console.log(this.methods);
  }
}
