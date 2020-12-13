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
  result;
  orderedArray;
  icount;

  dataGroup = Array();
  group = Array(); 
  
  i = 1;

  math = Math;

  numSequence(n: number): Array<number> { 
    return Array(n); 
  } 
  

  constructor(private swapi:ApiService, private router:Router, private actRoute: ActivatedRoute) {  

    }

   ngOnInit(): void {
    this.type = this.actRoute.snapshot.params['type']
    this.id = parseInt(this.actRoute.snapshot.params['id']);

  for(this.i;this.i<=100;this.i++){
        this.swapi.getSpecific(this.type,this.i).subscribe((data:any)=>{
          this.dataGroup.push(data); //Getting details of all elements from current type
          this.group.push(data.name || data.title); //Creating a list of names
        });
      }   
   }


   toSpecElement(param){
  
    this.result = this.dataGroup.find(n=>n.title === param || n.name === param).url.toString().slice(-3,-1).split("/"); //Getting the (id) number appearing in the url property 
    
    this.router.navigate([this.type+'/'+this.result[this.result.length-1]+"/"])

      }

  clPage(param){
    this.id = param;
    this.router.navigate([this.type+"/page/"+ param]);
  }
}
