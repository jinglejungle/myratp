import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ligne-horaires',
  templateUrl: './ligne-horaires.component.html',
  styleUrls: ['./ligne-horaires.component.css']
})
export class LigneHorairesComponent implements OnInit {
  @Input() horaires;

  constructor() { }

  ngOnInit() {
  }

}
