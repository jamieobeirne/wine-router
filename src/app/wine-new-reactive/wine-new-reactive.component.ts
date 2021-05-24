import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NameWineValidator } from '../NameWineValidator';
import { FormControl, FormGroup } from '@angular/forms';

import { Wine } from '../models/Wine';
import { WineService } from '../services/wine.service';


@Component({
  selector: 'app-wine-new-reactive',
  templateUrl: './wine-new-reactive.component.html',
  styleUrls: ['./wine-new-reactive.component.css']
})


export class WineNewReactiveComponent {

  private wineService: WineService;
  public wine: Wine[];
  public wineForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.wineForm = this.fb.group({
      name: [null, [Validators.required, NameWineValidator()]],
      price: [1, [Validators.required, Validators.min(1)]],
      url: [null, [Validators.required, Validators.pattern('^http(s?)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/\S*)?$')]],
      onSale: false
    });
  }

  onSubmit() {
    console.log('Wine Form Value', this.wineForm.value);
  }

  get name() { return this.wineForm.get('name'); }
  get price() { return this.wineForm.get('price'); }
  get url() { return this.wineForm.get('url'); }


  createWine(wineForm) {
    if (wineForm.valid) {
      let created = this.wineService.createWine(this.wine);

    }

  }
}