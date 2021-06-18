import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wine } from '../../models/Wine';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent {
  public wine: Wine;
  constructor(private wineService: WineService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const wineCode = this.route.snapshot.paramMap.get('id');
    this.wineService.getWine(wineCode).subscribe(wine => this.wine = wine);
  }

  /*public stock: Stock;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: {stock: Stock}) => {
      this.stock = data.stock;
    });
  }*/

}
