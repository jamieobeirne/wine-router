import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WineNewReactiveComponent }
    from './wine/wine-new/wine-new-reactive.component';
import { WinelistComponent } from './wine/wine-list/winelist.component';
import { LoginComponent } from './user/login/login/login.component';
import { RegisterComponent } from './user/register/register/register.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'wines/list', component: WinelistComponent },
    { path: 'wines/create', component: WineNewReactiveComponent },
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