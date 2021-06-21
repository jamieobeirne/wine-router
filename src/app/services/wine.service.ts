import { Injectable } from '@angular/core';
import { Wine } from '../models/Wine';

import { Observable, of } from 'rxjs';          /* not from pathways in the book*/
import { throwError as ObservableThrow } from 'rxjs'; /*not _throw*/
import { of as ObservableOf } from 'rxjs';
import { WineQuantityChange } from '../models/WineQuantityChange';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { UserStoreService } from './user-store.service';


@Injectable()
export class WineService {
  private wines: Wine[];

  constructor(private http: HttpClient) { }

  getWine(id: string): Observable<Wine> {
    return this.http.get<Wine>('/api/wine/' + id)
  }

  getWines(): Observable<Wine[]> {
    console.log();
    return this.http.get<Wine[]>('/api/wine');
  }

  getWinesSearch(query: string): Observable<Wine[]> {
    console.log(query);
    return this.http.get<Wine[]>(`/api/wine?q=${query}`);
  }

  createWine(wine: Wine): Observable<any> {
    return this.http.post('/api/wine', wine);
  }

  changeQuantity(id: number, newQuantity: number): Observable<Wine> {
    return this.http.patch<Wine>('/api/wine/' + id,
      {
        changeInQuantity: newQuantity
      });
  }

  makeFailingCall() {
    return this.http.get('/api/fail');
  }

}
