import { Injectable } from '@angular/core';
import { Wine } from '../models/Wine';

import { Validators, FormBuilder } from '@angular/forms';
import { NameWineValidator } from '../NameWineValidator';
import { FormControl, FormGroup } from '@angular/forms';
import { WineNewReactiveComponent } from '../wine-new-reactive/wine-new-reactive.component'


import { Observable } from 'rxjs/Observable';
import { _throw as ObservableThrow } from 'rxjs/observable/throw';
import { of as ObservableOf } from 'rxjs/observable/of';



@Injectable(
  /*{providedIn: 'root'} moved to app.module*/
)
export class WineService {

  private wines: Wine[];
  public wineForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.wines = [
      {
        name: "VEGA SICILIA UNICO 2009",
        imageUrl: "../../assets/wine.png",
        price: 19.51,
        isOnSale: true, /**affects background color*/
        quantityInCart: 2,
        foodPairing: [],
      },
      {
        name: "TE KOKO 2016",
        imageUrl: "../../assets/wine2.png",
        price: 44.51,
        isOnSale: true,/**affects background color*/
        quantityInCart: 1,
        foodPairing: [],
      },
      {
        name: "CHAMPAGNE DOM PERIGNON 2010",
        imageUrl: "../../assets/champagne.png",
        price: 162.51,
        isOnSale: false,/**affects background color*/
        quantityInCart: 0,
        foodPairing: [],
      }
    ];
    /*this.createForm();*/
  }


  getWine(): Observable<Wine[]> {
    return ObservableOf(this.wines);
  }


  createWine(wine: Wine): Observable<any> {
    let foundWine = this.wines.find(each => each.name === wine.name);
    if (foundWine) {
      return ObservableThrow({
        msg: 'Wine with name ' +
          wine.name + ' already exists'
      });
    }
    this.wines.push(wine);
    return ObservableOf({
      msg: 'Wine with name ' + wine.name +
        ' successfully created'
    });;
  }



}
