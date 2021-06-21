import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WineNewReactiveComponent }
    from './wine/wine-new/wine-new-reactive.component';
import { WinelistComponent } from './wine/wine-list/winelist.component';
import { LoginComponent } from './user/login/login/login.component';
import { RegisterComponent } from './user/register/register/register.component';
import { WineDetailComponent } from './wine/wine-detail/wine-detail.component';

import { AuthGuard } from './guards/auth.guard';
import { CreateStockDeactivateGuard } from './guards/wine-new-deactivate-guard.guard';
import { StockLoadResolverService } from './guards/wine-load-resolver.service';


const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'wines/list', component: WinelistComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'wines/create', component: WineNewReactiveComponent,
        canActivate: [AuthGuard], canDeactivate: [CreateStockDeactivateGuard]
    },
    {
        path: 'wine/:id', component: WineDetailComponent,
        canActivate: [AuthGuard], resolve: { stock: StockLoadResolverService }
    },
    { path: '**', redirectTo: '/register' }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutesModule { }