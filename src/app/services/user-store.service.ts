

import { Injectable } from '@angular/core';

@Injectable()
export class UserStoreService {


  private _token: string = null;
  constructor() { }

  set token(token: string) {
    this._token = token;
  }

  get token() {
    /*return this._token;*/
    return localStorage.getItem('token'); /*get token from local storage*/
  }

  isLoggedIn() {
    return this.token != null;
  }

}