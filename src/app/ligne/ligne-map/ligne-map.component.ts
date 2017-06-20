import { Component, OnInit } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapPolyline, SebmGoogleMapPolylinePoint } from 'angular2-google-maps/core';

export class Station {
  name: string ;
  lat: number ;
  lng: number ;
}

@Component({
  selector: 'app-ligne-map',
  templateUrl: './ligne-map.component.html',
  styleUrls: ['./ligne-map.component.css']
})

export class LigneMapComponent implements OnInit {
  /* Parametres google map */
  zoom: number = 13;
  latCenter: number = 48.84910800000129;
  lngCenter: number = 2.3556310000000167;
  /* Trace */
  strokeColor: string = "#158ff2";
  strokeWeight: string = "6";
  strokeOpacity: string = "0.7";
  /* Pointeurs */
  iconBus: string = "assets/img/icon-bus50px.png";

  //tableau station contenant la liste des stations et leurs coordoonnées géographiques
  // ces données sont tirées d'un fichier json statique téléchargeables sur le site de la RATP
  stations: Station[] = [
    { name: "Champ de Mars"                          , lat: 48.85507589362406 , lng: 2.2960278467667523},
    { name: "Rapp - La Bourdonnais"                  , lat: 48.856937478832926, lng: 2.29960847722716},
    { name: "Champ de Mars - La Bourdonnais"         , lat: 48.855581450544854, lng: 2.3031778580684246},
    { name: "Ecole Militaire"                        , lat: 48.85430600663912,  lng: 2.305997932351291},
    { name: "Duquesne - Lowendal"                    , lat: 48.85301242148468,  lng: 2.3084093030670783},
    { name: "El Salvador"                            , lat: 48.85066735678148,  lng: 2.311297738319514},
    { name: "Saint-François-Xavier"                  , lat: 48.852186655965916, lng: 2.3132853436335314},
    { name: "Oudinot"                                , lat: 48.849616522707365, lng: 2.314743685797424},
    { name: "Duroc"                                  , lat: 48.847369889708794, lng: 2.3160519577082312},
    { name: "Vaneau - Saint-Romain"                  , lat: 48.84788276485709,  lng: 2.3196604682901585},
    { name: "Bac - Saint-Placide"                    , lat: 48.84992345516465,  lng: 2.323718043780384},
    { name: "Sèvres - Babylone"                      , lat: 48.85109205620137,  lng: 2.325910342202172},
    { name: "Michel Debré"                           , lat: 48.8517844515023,   lng: 2.3307040210995797},
    { name: "Saint-Germain-des-Prés"                 , lat: 48.85328544303421,  lng: 2.3325015699609604},
    { name: "Eglise Saint-Sulpice"                   , lat: 48.85156893064887,  lng: 2.337881145081453},
    { name: "Seine - Buci"                           , lat: 48.85289907507759,  lng: 2.336560105706197},
    { name: "Saint-Germain - Odéon"                  , lat: 48.852162079896225, lng: 2.3397060895787947},
    { name: "Cluny"                                  , lat: 48.851164321077135, lng: 2.3437099323238684},
    { name: "Collège de France"                      , lat: 48.849321725621934, lng: 2.3462154498324934},
    { name: "Maubert - Mutualité"                    , lat: 48.85016642446109,  lng: 2.3477408578510297},
    { name: "Monge - Mutualité"                      , lat: 48.85016642446109,  lng: 2.3477408578510297},
    { name: "St-Germain - Cardinal Lemoine"          , lat: 48.84936585821649,  lng: 2.353746322738603},
    { name: "Institut du Monde Arabe"                , lat: 48.84904201040451,  lng: 2.355775319106966},
    { name: "Pont de Sully - Quai de Béthune"        , lat: 48.850119889984526, lng: 2.3593981982611987},
    { name: "Sully - Morland"                        , lat: 48.85140439083716,  lng: 2.3629259995215057},
    { name: "La Cerisaie"                            , lat: 48.85220352272098,  lng: 2.3662085612665225},
    { name: "Bastille - Rue Saint-Antoine"           , lat: 48.853056803181765, lng: 2.368306389968919},
    { name: "Bastille"                               , lat: 48.853056803181765, lng: 2.368306389968919},
    { name: "Lyon - Ledru-Rollin"                    , lat: 48.8488765289316,   lng: 2.372266746924533},
    { name: "Gare de Lyon - Diderot"                 , lat: 48.84612641829164,  lng: 2.372047013071946},
    { name: "Gare de Lyon - Van Gogh"                , lat: 48.84489527909312,  lng: 2.3715287402401484},
    { name: "Gare de Lyon"                           , lat: 48.843744254309904, lng: 2.3736249556721383},
    { name: "Ministère de l´Economie et des Finances", lat: 48.84079481495786,  lng: 2.378320391662055},
    { name: "Gare de Bercy"                          , lat: 48.840002834777216, lng: 2.381328844496672},
    { name: "Dugommier"                              , lat: 48.838840824123245, lng: 2.3879041153117466},
    { name: "Charenton - Wattignies"                 , lat: 48.83698822025995,  lng: 2.3905708379884882 },
    { name: "Nicolai"                                , lat: 48.835135751614494, lng: 2.3928153218855033},
    { name: "Charenton - Jardiniers"                 , lat: 48.83346303611521,  lng: 2.394964547608824},
    { name: "Porte de Charenton"                     , lat: 48.8318435059448,   lng: 2.3984886704251625},
    { name: "Porte de Reuilly"                       , lat: 48.83432305209836,  lng: 2.400465664003342}
  ];

  nbrStations: number = this.stations.length -1;

  constructor() {
     // console.log("mon tableau GPS stations: "+ this.stations);
   }

  ngOnInit() {

  }

}
