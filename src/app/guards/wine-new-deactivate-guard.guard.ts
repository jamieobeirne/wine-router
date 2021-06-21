import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot }
  from '@angular/router';
import { WineNewReactiveComponent }
  from '../wine/wine-new/wine-new-reactive.component';
import { Observable } from 'rxjs';

@Injectable()
export class CreateStockDeactivateGuard

  implements CanDeactivate<WineNewReactiveComponent> {

  constructor() { }

  canDeactivate(component: WineNewReactiveComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    return window.confirm('Do you want to leave this page?');
  }
}
