import { Component, OnInit } from '@angular/core';
import { Wine } from '../models/Wine';
import { WineQuantityChange } from '../models/WineQuantityChange';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent implements OnInit {

  wines: Wine[] = [];

  constructor() { }

  ngOnInit(): void {

    const Wine: Wine = {
      name: "VEGA SICILIA UNICO 2009",
      imageUrl: "../../assets/wine.png",
      price: 19.51,
      isOnSale: true, /**affects background color*/
      quantityInCart: 2,
      foodPairing: [],
    }

    const Wine2: Wine = {
      name: "TE KOKO 2016",
      imageUrl: "../../assets/wine2.png",
      price: 44.51,
      isOnSale: true,/**affects background color*/
      quantityInCart: 1,
      foodPairing: [],
    }

    const Wine3: Wine = {
      name: "CHAMPAGNE DOM PERIGNON 2010",
      imageUrl: "../../assets/champagne.png",
      price: 162.51,
      isOnSale: false,/**affects background color*/
      quantityInCart: 0,
      foodPairing: [],
    }

    this.wines.push(Wine, Wine2, Wine3);

  }

  onSelectedWine(WineQuantity: WineQuantityChange) {
    console.log("Wine Data:", WineQuantity);
  }

}
