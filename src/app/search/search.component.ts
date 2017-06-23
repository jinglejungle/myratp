import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  big(event){
    event.target.style.width="130px";
  }

  small(event){
    event.target.style.width="30px";
  }
}
