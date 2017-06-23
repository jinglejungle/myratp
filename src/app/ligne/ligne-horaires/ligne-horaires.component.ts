import { Component, Input, OnInit } from '@angular/core';
import { Line } from '../line';

@Component({
  selector: 'app-ligne-horaires',
  templateUrl: './ligne-horaires.component.html',
  styleUrls: ['./ligne-horaires.component.css']
})
export class LigneHorairesComponent implements OnInit {
  @Input() line:Line;
  @Input() horaires;

  constructor() { }

  ngOnInit() {
  }

}
