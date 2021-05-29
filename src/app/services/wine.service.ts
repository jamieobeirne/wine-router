import { Injectable } from '@angular/core';
import { Wine } from '../models/Wine';

import { Validators, FormBuilder } from '@angular/forms';
import { NameWineValidator } from '../NameWineValidator';
import { FormControl, FormGroup } from '@angular/forms';
import { WineNewReactiveComponent } from '../wine-new-reactive/wine-new-reactive.component'


import { Observable, of } from 'rxjs';          /* not from pathways in the book*/
import { throwError as ObservableThrow } from 'rxjs'; /*not _throw*/
import { of as ObservableOf } from 'rxjs';
import { WineQuantityChange } from '../models/WineQuantityChange';




@Injectable(
  /*{providedIn: 'root'} moved to app.module*/
)
export class WineService {
  private wines: Wine[];
  public wineForm: FormGroup;

  /*constructor(private fb: FormBuilder)*/
  constructor() {
    this.wines = [
      {
        name: "VEGA SICILIA UNICO 2009",
        imageUrl: "../../assets/wine.png",
        price: 19.51,
        isOnSale: true, /**affects background color*/
        quantityInCart: 2,
        foodPairing: [],
        wineID: 1,
      },
      {
        name: "TE KOKO 2016",
        imageUrl: "../../assets/wine2.png",
        price: 44.51,
        isOnSale: true,/**affects background color*/
        quantityInCart: 1,
        foodPairing: [],
        wineID: 2,
      },
      {
        name: "CHAMPAGNE DOM PERIGNON 2010",
        imageUrl: "../../assets/champagne.png",
        price: 162.51,
        isOnSale: false,/**affects background color*/
        quantityInCart: 0,
        foodPairing: [],
        wineID: 3,
      }
    ];
    /*this.createForm();*/
  }


  getWine(): Observable<Wine[]> {
    return ObservableOf(this.wines);
  }


  changeQuantity(wineID: number, newQuantity: number): Observable<Wine> {
    const wine = this.wines.find(wine => wine.wineID === wineID);
    wine.quantityInCart += newQuantity;
    return ObservableOf(wine);
  }

  createWineService(wine: Wine): Observable<any> {
    let newWine = this.wines.find(each => each.name === wine.name);
    if (newWine) {
      return ObservableThrow({ msg: 'Wine with name ' + wine.name + ' already exists' });
    }
    this.wines.push(wine);
    return ObservableOf({ msg: 'Wine with name ' + wine.name + ' successfully created' });

  }

}
