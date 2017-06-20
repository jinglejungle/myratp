import { Injectable } from '@angular/core';

@Injectable()
export class ApiBusService {

  constructor() { }

  getLines(typeLine: string, numLine: string ){

    let query = `
             <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">    
               <soapenv:Header/>
               <soapenv:Body>
                 <wsiv:getLines>
                   <wsiv:line>
                     <xsd:id>{{typeLine+numLine}}</xsd:id>
                   </wsiv:line>
                 </wsiv:getLines> 
               </soapenv:Body>
             </soapenv:Envelope>
    `;

    return 'fichier xml obtenu via getLines - infos sur la ligne' ;
  }

  getStations(typeLine: string, numLine: string, nameStation: string){
    let query = `
             <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">    
               <soapenv:Header/>
               <soapenv:Body>
                 <wsiv:getStations>
                   <xsd:line>
                     <xsd:id>{{typeLine+numLine}}</xsd:id>
                   </xsd:line>
                   <xsd:name>{{nameStation}}</xsd:name>
                 </wsiv:getStations> 
               </soapenv:Body>
             </soapenv:Envelope>  
    `;

    return "fichier xml obtenu via getStations - info sur les stations" ;
  }

  getMissionsNext(typeLine: string, numLine: string, numStation: string, sens: string ){

    let query = `
             <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">    
               <soapenv:Header/>
               <soapenv:Body>
                 <wsiv:getMissionsNext>
                   <wsiv:station>
                     <xsd:id>{{numStation}}</xsd:id>
                     <xsd:line>
                       <xsd:id>{{typeLine+numLine}}</xsd:id>
                     </xsd:line>
                     <xsd:name></xsd:name>
                   </wsiv:station>
                   <wsiv:direction>
                     <xsd:sens>{{sens}}</xsd:sens> 
                   </wsiv:direction>
                 </wsiv:getMissionsNext>
               </soapenv:Body>
             </soapenv:Envelope>  
    `;

    return 'fichier xml obtenu via getMissionsNext' ;
  }

}
