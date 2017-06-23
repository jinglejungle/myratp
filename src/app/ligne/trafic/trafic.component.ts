import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ApiBusService } from '../../apiRatp.service';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Component({

  selector: 'app-trafic',
  templateUrl: './trafic.component.html',
  styleUrls: ['./trafic.component.css']
  
})


export class TraficComponent implements OnInit, AfterContentInit {
  
  public trafic: Array<any>;

  constructor( private ApiBusService: ApiBusService ) {

     this.ApiBusService.getTraffic().subscribe(
       value => { this.trafic = value.result; }
     );

  }

  ngOnInit(){
  }

  ngAfterContentInit () {
  }

}
