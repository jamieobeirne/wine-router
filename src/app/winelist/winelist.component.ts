import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Wine } from '../models/Wine';
import { WineQuantityChange } from '../models/WineQuantityChange';
import { WineService } from '../services/wine.service';

import { Subject } from 'rxjs';
import {
  debounceTime, switchMap,
  distinctUntilChanged, startWith,
  share
} from 'rxjs/operators';


@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent implements OnInit {


  public wines$: Observable<Wine[]>;
  public searchString: string = '';

  private searchTerms: Subject<string> = new Subject();

  constructor(private wineService: WineService) { }


  ngOnInit() {
    /*this.wines$ = this.wineService.getWine()
      .pipe(share());*/

    this.wines$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.wineService.getWines(query)),
      share()
    );

  }

  /*search() {
    this.wines$ = this.wineService.getWines(this.searchString)
      .pipe(share());
  }*/
  search() {

    this.searchTerms.next(this.searchString);
  }


  onSelectedWine(WineQuantity: WineQuantityChange) {
    this.wineService.changeQuantity(WineQuantity.wineID, WineQuantity.cantidadWine)
      .subscribe((result: any) => {
        console.log(result);
      });
  }

}
