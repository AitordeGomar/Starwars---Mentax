import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  searchedElement:any = {};
  methods = Array();

  //Getting name from url address variables
  peopleAux;
  people = Array();
  planetsAux;
  planets = Array();
  homeworld;
  filmsAux;
  films = Array();
  speciesAux;
  species = Array();
  starshipsAux ;
  starships = Array();
  vehiclesAux;
  vehicles = Array();

  result;

  i = 1;
  p = 0;
  pl = 0;
  f = 0;
  sh = 0;
  s = 0;
  v=0;
  

  constructor(private swapi:ApiService, private router:Router, private actRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.type = this.actRoute.snapshot.params['type'];
    this.id = this.actRoute.snapshot.params['id'];
    console.log(this.type);

    this.swapi.getSpecific(this.type,this.id).subscribe((data)=>{
      this.searchedElement = data;
      console.log(this.searchedElement);
      this.methods = Object.getOwnPropertyNames(this.searchedElement);//Getting automatically the property list

    //Getting people in the current element 
    if(this.methods.find(n=>n === 'residents' || n === 'characters' || n === 'people' || n === 'pilots')){
      this.peopleAux = this.searchedElement.residents || this.searchedElement.characters || this.searchedElement.people || this.searchedElement.pilots;
        this.peopleAux = this.peopleAux.map(n=>n.slice(21));
        
        for(this.p;this.p<this.peopleAux.length;this.p++){
          this.swapi.getRelated(this.peopleAux[this.p]).subscribe((data:any)=>{
            
            this.people.push(data.name);});
        }
      }
      //Getting films in the current element
      if(this.methods.find(n=>n === "films")){ 
    this.filmsAux = this.searchedElement.films;
    this.filmsAux = this.filmsAux.map(n=>n.slice(21));
      for(this.f;this.f<this.filmsAux.length;this.f++){
        this.swapi.getRelated(this.filmsAux[this.f]).subscribe((data:any)=>{
        this.films.push(data.title);});
      }
    }


      //Getting planets in the current element
      if(this.methods.find(n=>n === "homeworld" || n === "planets")){
      this.planetsAux = this.searchedElement.homeworld || this.searchedElement.planets;
      if(typeof(this.planetsAux) === "string"){
        this.planetsAux = this.planetsAux.slice(21);
        this.swapi.getRelated(this.planetsAux).subscribe((data:any)=>{
          this.homeworld = data.name;
        console.log(this.planets)});

      }else{
        this.planetsAux = this.planetsAux.map(n=>n.slice(21));
        for(this.pl;this.pl<this.planetsAux.length;this.pl++){
          console.log()
          this.swapi.getRelated(this.planetsAux[this.pl]).subscribe((data:any)=>{
            this.planets.push(data.name);});
        }
      }
    }

    //Getting species in the current element
    if(this.methods.find(n=>n === "species")){
    this.speciesAux = this.searchedElement.species;
    if(typeof(this.speciesAux) === "string"){
      this.speciesAux = this.speciesAux.slice(21);
      this.swapi.getRelated(this.speciesAux).subscribe((data:any)=>{
        this.species = data.name;});
    }else{
      this.speciesAux = this.speciesAux.map(n=>n.slice(21));
      for(this.s;this.s<this.speciesAux.length;this.s++){
        this.swapi.getRelated(this.speciesAux[this.s]).subscribe((data:any)=>{
          this.species.push(data.name);});
      }
    }
  }

    //Getting starships in the current element
    if(this.methods.find(n=>n === "starships")){
    this.starshipsAux = this.searchedElement.starships;
      this.starshipsAux = this.starshipsAux.map(n=>n.slice(21));
      for(this.sh;this.sh<this.starshipsAux.length;this.sh++){
        this.swapi.getRelated(this.starshipsAux[this.sh]).subscribe((data:any)=>{
          this.starships.push(data.name);});
      }
    }


    //Getting vehicles in the current element
    if(this.methods.find(n=>n === "vehicles")){
    this.vehiclesAux = this.searchedElement.vehicles;
    if(typeof(this.vehiclesAux) === "string"){
      this.vehiclesAux = this.vehiclesAux.slice(21);
      this.swapi.getRelated(this.vehiclesAux).subscribe((data:any)=>{
        this.vehicles = data.name;});

    }else{
      this.vehiclesAux = this.vehiclesAux.map(n=>n.slice(21));
      for(this.v;this.v<this.vehiclesAux.length;this.v++){
        console.log()
        this.swapi.getRelated(this.vehiclesAux[this.v]).subscribe((data:any)=>{
          this.vehicles.push(data.name);});
      }
    }
  }

      });
}

  goBack(){
    this.router.navigate([this.type+'/page/1']);
  }
}
