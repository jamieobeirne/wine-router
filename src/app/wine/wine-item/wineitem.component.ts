import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Wine } from "../../models/Wine";
import { Food } from "../../models/Food"
import { WineQuantityChange } from 'src/app/models/WineQuantityChange';

import { WineService } from 'src/app/services/wine.service';


@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class WineitemComponent implements OnInit {


  @Input() public Data: Wine;
  @Output() private SelectedWine: EventEmitter<WineQuantityChange>;

  numbers = [...Array(20).keys()];

  /*constructor() {
    this.SelectedWine = new EventEmitter<WineQuantityChange>();
  }*/

  @Input() public wine: WindowOrWorkerGlobalScope;
  constructor(private wineService: WineService) { this.SelectedWine = new EventEmitter<WineQuantityChange>() }


  ngOnInit() { }

  increase(): void {
    //this.Data.quantityInCart += 1;
    this.SelectedWine.emit({ wineID: this.Data.id, cantidadWine: 1 });
  }

  decrease(): void {
    //this.Data.quantityInCart -= 1;
    this.SelectedWine.emit({ wineID: this.Data.id, cantidadWine: -1 });
  }


  sendSelectedWine(event): void {
    const wineQuantity: WineQuantityChange = {
      wineID: this.Data.id,
      cantidadWine: this.Data.quantityInCart
    };
    this.SelectedWine.emit(wineQuantity)
  }


}

