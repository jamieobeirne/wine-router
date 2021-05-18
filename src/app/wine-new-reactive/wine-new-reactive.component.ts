import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { NameWineValidator } from '../NameWineValidator';

@Component({
  selector: 'app-wine-new-reactive',
  templateUrl: './wine-new-reactive.component.html',
  styleUrls: ['./wine-new-reactive.component.css']
})
export class WineNewReactiveComponent {

  public wineForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.wineForm = this.fb.group({
      name: [null, [Validators.required, NameWineValidator()]],/*NameWineValidator customized validator -- "Laya", "K-Naina", "Verdejo", "Monstrell"*/
      price: [1, [Validators.required, Validators.min(1)]],
      url: [null, [Validators.required, Validators.pattern('^http(s?)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/\S*)?$')]],
      onSale: false
    });
  }

  onSubmit() {
    console.log('Stock Form Value', this.wineForm.value);
  }

  /*Getters are easier to read*/
  get name() { return this.wineForm.get('name'); }
  get price() { return this.wineForm.get('price'); }
  get url() { return this.wineForm.get('url'); }

}
