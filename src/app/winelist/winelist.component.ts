import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Wine } from '../models/Wine';
import { WineQuantityChange } from '../models/WineQuantityChange';
import { WineService } from '../services/wine.service';


@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent implements OnInit {


  public wines$: Observable<Wine[]>;
  constructor(private wineService: WineService) { }


  ngOnInit() {
    this.wines$ = this.wineService.getWine();
  }


  onSelectedWine(WineQuantity: WineQuantityChange) {
    console.log("Wine Data:", WineQuantity);
    this.wineService.changeQuantity(WineQuantity.wineID, WineQuantity.cantidadWine)
  }

}
