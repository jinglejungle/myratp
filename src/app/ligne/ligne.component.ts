import { Component, OnInit } from '@angular/core';
import { Line } from './line' ;
//on va utiliser une méthode du service apiRatp.service donc on l'importe ici
import {ApiBusService} from '../apiRatp.service';

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})

export class LigneComponent implements OnInit {

  //horaires est un tableau qui stockera les données récupérés via la méthode getMissionsNext du service  apiBusService
  horaires: any;
  // line est créé et rempli dans le composant enfant recherche.component.css
  line: any ;

//comme on utilise une méthode du service apiBusService on passe au constructeur le service
  constructor(private apiBusService: ApiBusService) {}

  ngOnInit() {
  }

  // la fonction onSearch est appelé depuis le composant enfant recherche ( c'est lui qui transmet l'enfant via $event dans la template html)
  /*
   * Function onSearch
   *
   * Appel de  la méthode getMissionsNext du service apiBusService pour récupérer les prochains passages à une station donnée
   *
   * @line (Line) type de ligne ( ex: bus, metro, rer)
   * @return (void)
   */
  onSearch(line:Line) {

    this.line = line ;

    //instanciation du tableau horaires qui contiendra les 2 prochains passages à cette station
    this.horaires=[];

    // appel du service et traitement de l'observable reçue
    this.apiBusService.getMissionsNext(line.typeLine, line.numLine,line.slug, line.sens ).subscribe(
      //affectation dans le tableau horaires des données des 2 prochains passages
      value => this.horaires = value.result.schedules,
      error => console.log(error)
    );

  }

}
