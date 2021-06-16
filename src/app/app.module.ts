import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WineitemComponent } from './wine/wineitem/wineitem.component';
import { WinelistComponent } from './winelist/winelist.component';
import { WineNewReactiveComponent } from './wine-new-reactive/wine-new-reactive.component';
import { WineService } from './services/wine.service';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutesModule } from './app-routes.module';
import { LoginComponent } from './user/login/login/login.component';
import { RegisterComponent } from './user/register/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    WineitemComponent,
    WinelistComponent,
    WineNewReactiveComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutesModule
  ],
  providers: [WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
