import { Component, OnInit } from '@angular/core';
import { Line } from './line' ;
import {ApiBusService} from '../apiRatp.service';

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})
export class LigneComponent implements OnInit {
  horaires: string;

  constructor(private apiBusService: ApiBusService ) { }

  ngOnInit() {
  }
  onSearch(line:Line){
    this.horaires = this.apiBusService.getMissionsNext('B','87','139_55_72','R');
    console.log(line);
    console.log(this.horaires);
    alert("sam");
  }

}
