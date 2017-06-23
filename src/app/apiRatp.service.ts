import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from "rxjs/Observable";


@Injectable()
export class ApiBusService {

  constructor( private http: Http ) { }

  /*
   * Function getStations
   *
   * Liste des stations d'une ligne
   *
   * @typeLine (string) type de ligne ( ex: bus, metro, rer)
   * @numLine (string)  numéro ou référence de la ligne ( ex: 87 , A )
   * @return (Observable)
   */
  getStations(typeLine: string, numLine: string ):Observable<any> {

    let url=`https://api-ratp.pierre-grimaud.fr/v3/stations/${typeLine}/${numLine}`;

    return this.http.get(url)
      .map(data => {
        data.json();
        //console.log("DATA HERE: ", data.json());
        return data.json();
      });
  }


  /*
   * Function getDirections
   *
   * Liste des direction d'une ligne
   *
   * @typeLine (string) type de ligne ( ex: bus, metro, rer)
   * @numLine (string)  numéro ou référence de la ligne ( ex: 87 , A )
   * @return (Observable)
   */
  getDirections(typeLine: string, numLine: string ): Observable<any> {

    let url=`https://api-ratp.pierre-grimaud.fr/v3/destinations/${typeLine}/${numLine}`;

    return this.http.get(url)
      .map(data => {
        data.json();
        //console.log("DATA HERE: ", data.json());
        return data.json();
      });

  }


  /*
   * Function getMissionsNext
   *
   * Affiche les 2 prochains passages d'une ligne ( prend en compte le sens)
   *
   * @typeLine (string) type de ligne ( ex: bus, metro, rer)
   * @numLine (string)  numéro ou référence de la ligne ( ex: 87 , A )
   * @nameStationSlung (string) nom de la station formaté pour la recherche (ex:)
   * @sens (string) sens de la station ( 'A' ou 'R' )
   * @return (Observable)
   */
  getMissionsNext(typeLine: string, numLine: string, nameStationSlung: string, sens: string ): Observable<any> {
    //bug dans l'api, le format slung ne fonctionne pas toujours. La ligne suivante est nécessaire:
    nameStationSlung = nameStationSlung.replace("+"," ")

    let url=`https://api-ratp.pierre-grimaud.fr/v3/schedules/${typeLine}/${numLine}/${nameStationSlung}/${sens}` ;

    return this.http.get(url)
      .map(data => {
        data.json();
        //console.log("DATA HERE: ", data.json());
        return data.json();
      });
  }


  /*
   * Function getTraffic
   *
   * Affiche l'information trafic ( ex: tramways, metros, rers)
   *
   */

  getTraffic(): Observable<any> {

    let url=`https://api-ratp.pierre-grimaud.fr/v3/traffic`;

    return this.http.get(url)
      .map(data => {
        data.json();
        console.log("DATA HERE: ", data.json());
        return data.json();
      });

  }

}
