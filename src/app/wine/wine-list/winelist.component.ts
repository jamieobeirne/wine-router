import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Wine } from '../../models/Wine';
import { WineQuantityChange } from '../../models/WineQuantityChange';
import { WineService } from '../../services/wine.service';

import { Subject } from 'rxjs';
import {
  debounceTime, switchMap,
  distinctUntilChanged, startWith,
  share
} from 'rxjs/operators';

import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent implements OnInit {

  public wines$: Observable<Wine[]>;
  public searchString: string = '';
  private searchTerms: Subject<string> = new Subject();
  constructor(private wineService: WineService, private authService: AuthService) { }


  ngOnInit() {

    this.wines$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.wineService.getWinesSearch(query)),
      share()
    );

    /**interceptor*/
    this.fetchWines();
  }


  search() {

    this.searchTerms.next(this.searchString);
  }

  onSelectedWine(WineQuantity: WineQuantityChange) {
    this.wineService.changeQuantity(WineQuantity.wineID, WineQuantity.cantidadWine)
      .subscribe((result: any) => {
        console.log(result);
      });
  }


  /**interceptor*/
  fetchWines() {
    this.wines$ = this.wineService.getWines();
  }

  setAuthToken() {
    this.authService.authToken = 'TESTING';
  }

  resetAuthToken() {
    this.authService.authToken = null;
  }

  makeFailingCall() {
    this.wineService.makeFailingCall().subscribe(
      (res) => console.log('Successfully made failing call', res),
      (err) => console.error('Error making failing call', err));
  }

}
