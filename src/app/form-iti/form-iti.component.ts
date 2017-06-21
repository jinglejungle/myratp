import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-iti',
  templateUrl: './form-iti.component.html',
  styleUrls: ['./form-iti.component.css']
})
export class FormItiComponent implements OnInit {

    form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      titre:'',
      depart:'',
      arrive:'',
      aller:'',
      retour:'',
      date: new Date(),
      heure: new Date(),
      minute: new Date(),
      handicape:'',
      submit:'',
      delete:'',
      metro:'',
     
    })
  }

}
