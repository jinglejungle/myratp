import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiBusService } from '../apiRatp.service';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-itineraire',
  templateUrl: './itineraire.component.html',
  styleUrls: ['./itineraire.component.css']
})

export class ItineraireComponent implements OnInit {
  // tableau de string des stations de la ligne utilisé pour générer le ng2-select
  public stations: Array<string>  ;
  private line:string;
  private type:string;
  private sub:any;

  constructor(private route: ActivatedRoute, private apiBusService: ApiBusService) { }

  ngOnInit() {
    //we register to the observable returned by the ActivatedRoute to catch the params send in get method
     this.sub = this.route.params.subscribe(params => {
       this.type = params['type'];
       this.line = params['line'];
     });

    //Appel de la méthode getStations du service ApiBusService
    this.apiBusService.getStations(this.type, this.line ).subscribe(
      value =>  {
        //instanciation du tableau qui stocka les informations envoyé par l'api
        this.stations =[];
        for (let station in value.result.stations) {
          //stockages des données de l'api dans ls tableaux statio
          // stations: tableau contenant la liste des stations ( utilisé pour l'affichage du ng-select dans la template html)
          this.stations.push(value.result.stations[station].name);
        }
      }, error => console.log(error)
    );
  }

  ngOnDestroy(){
     this.sub.unsubscribe();
  }

}
