import { Injectable } from '@angular/core';
import { WineService } from '../services/wine.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot }
    from '@angular/router';
import { Wine } from '../models/Wine';
import { Observable } from 'rxjs';

@Injectable()
export class StockLoadResolverService implements Resolve<Wine> {

    constructor(private wineService: WineService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        Wine | Observable<Wine> | Promise<Wine> {
        const wineCode = route.paramMap.get('id');
        return this.wineService.getWine(wineCode);
    }
}