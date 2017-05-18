import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Scorecard provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Scorecard {

  constructor(public http: Http) {
    console.log('Hello Scorecard Provider');
  }
  
  baseUrl: string = 'http://sp-17-vincent-jbrownssf.c9users.io:8080/api'
  path: string = '/Scorecards'
  path2: string = '/AppUsers'
  
  
  saveScorecard(scorecard, token) {
      return this.http.post(
        this.baseUrl + this.path + '?access_token=' + token,
        scorecard
        );
  }
  //http://sp-17-vincent-jbrownssf.c9users.io:8080/api/Scorecards?access_token=wQ881xJgPfGyl7dRJeOOSU00BG6hsV0ZPH8tOZAJa2kQEg093LcT3XN6OYymXoT4

  // http://sp-17-vincent-jbrownssf.c9users.io:8080/api/Scorecards?filter[include]=Scorecard&filter[where][Id]=5911273ffe42a86157be2d80
  // http://sp-17-vincent-jbrownssf.c9users.io:8080/api/Scorecards?filter={"include":"Scorecard", "where":{"id":"5911273ffe42a86157be2d80"}}
  
  //http://sp-17-vincent-jbrownssf.c9users.io:8080/api/appUsers?filter=
  //%7B%22include%22%3A%22Scorecard%22%2C%20%22where%22%3A%7B%22id%22%3A%225911273ffe42a86157be2d80%22%7D%7D

  
  getScorecard(token) {
    return this.http.get(
      // this.baseUrl + this.path2 + '?filter={"include":"Scorecard", "where":{"id":"5911273ffe42a86157be2d80"}}' +
      this.baseUrl + this.path2 + '?filter={"include":"Scorecard", "where":{"id":"5911273ffe42a86157be2d80"}}' +
      '&access_token=' + token,
      {}
      );
  }
}
