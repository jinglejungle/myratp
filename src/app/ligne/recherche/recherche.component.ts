import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Line } from '../line';
import { ApiBusService } from '../../apiRatp.service';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})

export class RechercheComponent implements OnInit {

  @Output() eventSearch: EventEmitter<any> = new EventEmitter();

  //on instancie avec des string vide l'element Line
  line: Line = {
    numLine: '',
    typeLine: '',
    station: '',
    direction: '' ,
    sens: '',
    slug: ''

  } ;

  // tableau de string des stations de la ligne utilisé pour générer le ng2-select
  public stations: Array<string>  ;

  // tableau d'objet contenant le nom de la station et son
  public stationsTab: Array<any>  ;

  public directions:Array<string> ;
  public directionsTab:Array<any>

  constructor(private apiBusService: ApiBusService ) {
    //instanciation des données de la ligne
    this.line.numLine = '87' ;
    this.line.typeLine ='bus' ;

  }

  ngOnInit() {

    //Appel de la méthode getStations du service ApiBusService
    this.apiBusService.getStations(this.line.typeLine, this.line.numLine ).subscribe(
      value =>  {
        //instanciation des tableaux qui stockerons les informations envoyé par l'api
        this.stations =[];
        this.stationsTab =[];
        for (let station in value.result.stations) {
          //stockages des données de l'api dans les tableaux stations et stationsTab
          // stations: tableau contenant la liste des stations ( utilisé pour l'affichage du ng-select dans la template html)
          this.stations.push(value.result.stations[station].name);
          // stationsTab: tableau contenant la liste des stations + leur nom formaté (  pour un appel url)
          this.stationsTab.push(value.result.stations[station]);
        }
      }, error => console.log(error)
    );

    this.apiBusService.getDirections(this.line.typeLine, this.line.numLine ).subscribe(
      value =>  {
        //instanciation des tableaux qui stockerons les informations envoyé par l'api
        this.directions = [];
        this.directionsTab = [];

        for (let destination in value.result.destinations) {
          //stockages des données de l'api dans les tableaux directions et directionsTab
          // stations: tableau contenant la liste des directions ( utilisé pour l'affichage du ng-select dans la template html)
          this.directions.push(value.result.destinations[destination].name);
          // stationsTab: tableau contenant la liste des directions + leur sens respectif )
          this.directionsTab.push(value.result.destinations[destination]);
        }
      }, error => console.log(error)
    );
  }

  search() {


    // on vérifie qu'une direction et une station ont bien été saisie avant de faire l'appel
    //if ((( this.line.direction != "") && (this.line.station != ""))&&(this.line.direction!=this.line.station)) {

      //on stock le nom formaté qui corresponde à la station choisie
      for (let stations in this.stationsTab) {
        if ((this.stationsTab[stations].name == this.line.station) && (this.line.station != "")) {
          this.line.slug = this.stationsTab[stations].slug
        }
      }

      //on stock le sens en fonction de la direction choisie
      for (let direction in this.directionsTab) {
        if ((this.directionsTab[direction].name == this.line.direction) && (this.line.station != "")) {
          this.line.sens = this.directionsTab[direction].way
        }
      }

      //on appelle la fonction parente eventSearch ( dans ligne.component.ts)
      this.eventSearch.emit(this.line);

  }


  public refreshValueStart(value:any):void {
    this.line.station = value.text;

  }

  public refreshValueEnd(value:any):void {
    this.line.direction = value.text;

  }



}

