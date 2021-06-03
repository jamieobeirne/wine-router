import { Injectable } from '@angular/core';
import { Wine } from '../models/Wine';

import { Observable, of } from 'rxjs';          /* not from pathways in the book*/
import { throwError as ObservableThrow } from 'rxjs'; /*not _throw*/
import { of as ObservableOf } from 'rxjs';
import { WineQuantityChange } from '../models/WineQuantityChange';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class WineService {
  private wines: Wine[];

  constructor(private http: HttpClient) { }

  getWine(): Observable<Wine[]> {
    return this.http.get<Wine[]>('/api/wine')
  }

  createWine(wine: Wine): Observable<any> {
    return this.http.post('/api/wine', wine);
  }


  changeQuantity(wineID: number, newQuantity: number): Observable<Wine> {
    const wine = this.wines.find(wine => wine.wineID === wineID);
    wine.quantityInCart += newQuantity;
    return ObservableOf(wine);
  }



}
