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
  orderedArray;
  icount;

  dataGroup = Array();
  group = Array(); 
  selectedElement = Array();
  changingType;
  
  i=0;

  math = Math;

  numSequence(n: number): Array<number> { 
    return Array(n); 
  } 
  

  constructor(private swapi:ApiService, private router:Router, private actRoute: ActivatedRoute) {  

    }

   ngOnInit(): void {
    this.type = this.actRoute.snapshot.params['type']
    this.id = parseInt(this.actRoute.snapshot.params['id']);

    this.swapi.getType(this.type).subscribe((data)=>{
      this.icount = data});

  for(this.i;this.i<=100;this.i++){
        this.swapi.getSpecific(this.type,this.i).subscribe((data:any)=>{
          this.dataGroup.push(data);
          this.group.push(data.name || data.title);
        });
      }   
   }

   toSpecElement(param){
  
    this.result = this.dataGroup.find(n=>n.title === param || n.name === param).url.toString().slice(-3,-1).split("/");
    
    this.router.navigate([this.type+'/'+this.result[this.result.length-1]+"/"])

      }

  clPage(param){
    this.id = param;
        console.log(param);
    this.router.navigate([this.type+"/page/"+ param]);
  }
}
