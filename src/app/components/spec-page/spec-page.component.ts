import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-spec-page',
  templateUrl: './spec-page.component.html',
  styleUrls: ['./spec-page.component.css']
})
export class SpecPageComponent implements OnInit {
  type;
  id;
  searchedPage;
  result;
  

  constructor(private swapi:ApiService, private router:Router, private actRoute: ActivatedRoute) {    
    }

   ngOnInit(): void {
     this.swapi.getPage(this.actRoute.snapshot.params['type'],this.actRoute.snapshot.params['id']).subscribe((data)=>{
       this.searchedPage = data});

    this.type = this.actRoute.snapshot.params['type'];
     this.id = parseInt(this.actRoute.snapshot.params['id']);
   }


  toSpecElement(param){
    this.result = this.searchedPage.results[param].url.toString().slice(-3,-1).split("/").pop();
    this.router.navigate([this.type+"/"+this.result])
  }

  prevPage(){

    this.swapi.getPage(this.type,this.id-1).subscribe((data)=>{
      this.searchedPage = data});
    this.router.navigate([this.type+"/page", parseInt(this.id)-1]);
    this.id--;
  }

  nextPage(){

    this.swapi.getPage(this.type,this.id+1).subscribe((data)=>{
      this.searchedPage = data});
    
    this.router.navigate([this.type+"/page",this.id+1]);
    this.id++;
    console.log(this.actRoute.snapshot.params['type'], this.actRoute.snapshot.params['id']); 
    console.log(this.type, this.id); 
  }

}
