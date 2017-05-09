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
  
  baseUrl: string = 'http://sp-17-vincent-jbrownssf.c9users.io:8080/api/'
  path: string = '/Scorecards'
  
  saveScorecard(scorecard, token) {
      return this.http.post(
        this.baseUrl + this.path + '?access_token=' + token,
        scorecard
        );
  }
  
  getScorecard(token) {
    return this.http.get(
      this.baseUrl + this.path + '?access_token=' + token,
      {}
      );
  }
}
