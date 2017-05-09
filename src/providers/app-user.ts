import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppUser provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppUser {

  constructor(public http: Http) {
    console.log('Hello AppUser Provider');
  }
  
  baseUrl: string = "http://sp-17-vincent-jbrownssf.c9users.io:8080/api/"
  path: string = "/appUsers"
  
  register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
      );
  }
  
  login(userData) {
    return this.http.post(
      this.baseUrl + this.path + "/login",
      userData
      );
  }
  
}
