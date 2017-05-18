import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ResultsPage } from '../results-page/results-page';

import { Scorecard } from '../../providers/scorecard';

/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history-page',
  templateUrl: 'history-page.html',
})
export class HistoryPage {
  scorecardArray: any;
  currentScore: any = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _scorecard: Scorecard
    ) {
      
      
  }
  
  
  //scorecard: any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    //retrieve locally stored data
    // this.scorecard = JSON.parse(window.localStorage.getItem("scorecard"));
    // console.log("scorecard", this.scorecard);
    // console.log("date", this.scorecard.date);
    
    //uses service
      let userId =  window.localStorage.getItem('userId');
      let token = window.localStorage.getItem('token');
      this._scorecard.getScorecard(token)
      .map(res => res.json())
      .subscribe(res => {
        this.scorecardArray = res;
        this.currentScore = res[0].Scorecard
        console.log("hit", res)
        console.log("level 1", res[0].Scorecard[0])
        console.log("level 2", res[0].Scorecard[0].par)
        console.log("currentScore", this.currentScore)
        // console.log("scorecard from history page", this.scorecardArray);
      }, error => {
        alert("Something went wrong with retrieving the results of the round")
      });
    
  }
  
  goToResult(scorecard) {
    this.navCtrl.push(ResultsPage, {
      currentScore: scorecard
    });
  }
  
}
