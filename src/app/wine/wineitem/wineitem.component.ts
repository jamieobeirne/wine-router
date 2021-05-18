import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Wine } from "../../models/Wine";
import { Food } from "../../models/Food"
import { WineQuantityChange } from 'src/app/models/WineQuantityChange';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  /*styleUrls: ['./wineitem.component.css']*/

  styles: [`

  .wineitem-container{
    border:2px solid black;
    width: 300px;
    min-height: 520px;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 35px;
    padding:15px 30px;
    border-radius: 12px;
    margin-bottom: 75px;
  }

  .wineitem-container img{
    width: 300px;
  }

  .wineitem-container h6{
    margin:10px 0 0 0;
    padding:0;
  
  }

  .wine-button{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 35px;
    
  }

  .wine-button h6{
    margin: 0 25px;
  }

  .wine-button button{
    font-size: 35px;
    width:35px;
  }

  .in-stock{
    background-color: rgb(194, 189, 189);
  }

  .out-of-stock{
    background-color: rgb(140, 11, 190);
    color:white;
  }

`],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class WineitemComponent implements OnInit {

  // @Input Creamos una propiedad del componente o parámetro
  @Input() public Data: Wine;

  // EventEmitter es un Evento o Accion o Funcion Callback Js
  @Output() private SelectedWine: EventEmitter<WineQuantityChange>;

  numbers = [...Array(20).keys()];

  constructor() {
    this.SelectedWine = new EventEmitter<WineQuantityChange>();
  }

  ngOnInit() {

  }

  increase(): void {
    this.Data.quantityInCart += 1;
  }

  decrease(): void {
    this.Data.quantityInCart -= 1;
  }


  sendSelectedWine(event): void {
    const wineQuantity: WineQuantityChange = {
      wine: this.Data.name,
      cantidadWine: this.Data.quantityInCart
    };
    this.SelectedWine.emit(wineQuantity)
  }


}

