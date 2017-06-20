import {Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Line} from '../line';


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  @Output() eventSearch: EventEmitter<any> = new EventEmitter();
  line: Line = {
    stationStart: '',
    stationEnd: '' ,
  } ;

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.eventSearch.emit(this.line);
  }
}
