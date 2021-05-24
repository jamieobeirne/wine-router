import { Component, OnInit } from '@angular/core';
import { Wine } from '../models/Wine';
import { WineQuantityChange } from '../models/WineQuantityChange';
import { WineService } from '../services/wine.service';



@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent implements OnInit {

  public wines: Wine[];

  constructor(private wineServiceVariable: WineService) { }

  ngOnInit(): void {
    this.wines = this.wineServiceVariable.getWine();
  }

  onSelectedWine(WineQuantity: WineQuantityChange) {
    console.log("Wine Data:", WineQuantity);
  }

}
