import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { setMaxListeners } from 'process';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-spec-page',
  templateUrl: './spec-page.component.html',
  styleUrls: ['./spec-page.component.css']
})
export class SpecPageComponent implements OnInit {
  currentPage;
  type;
  id;
  searchedPage;
  result;
  

  constructor(private swapi:ApiService, private router:Router, private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.searchedPage = "";
    this.type = this.actRoute.snapshot.params['type'];
    this.id = this.actRoute.snapshot.params['id'];
    this.swapi.getPage(this.type,this.id).subscribe((data)=>{
      this.searchedPage = data});
    this.currentPage = parseInt(this.id);
    
  }

  toSpecElement(param){
    this.result = this.searchedPage.results[param].url.toString().slice(-3,-1).split("/").pop();
    this.router.navigate([this.type+"/"+this.result])
  }

  prevPage(){
    this.swapi.getPage(this.type,this.currentPage-1).subscribe((data)=>{
      this.searchedPage = data});
    
    this.router.navigate([this.type+"/page", this.currentPage-1]);
    this.currentPage--;
  }

  nextPage(){
    this.swapi.getPage(this.type,this.currentPage+1).subscribe((data)=>{
      this.searchedPage = data});
    
    this.router.navigate([this.type+"/page", this.currentPage+1]);
    this.currentPage++;
    console.log(this.searchedPage.results[0].url.toString().slice(-3,-1).split("/").pop()); 
  }

}
