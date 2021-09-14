import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class EncuestaComponent implements OnInit {

  formulario: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {

    this.formulario = this._formBuilder.group({
                          name: ['Hola', Validators.required],
                          address: ['hola', Validators.required],
                      });
  }

  ngOnInit() {
  }
}