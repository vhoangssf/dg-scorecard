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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _scorecard: Scorecard
    ) {
      
      //uses service
      this._scorecard.getScorecard(window.localStorage.getItem("token"))
      .map(res => res.json())
      .subscribe(res => {
        this.scorecardArray = res;
        console.log("scorecard from history page", this.scorecardArray);
      }, error => {
        alert("Something went wrong with retrieving the results of the round")
      });
  }
  
  
  //scorecard: any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    //retrieve locally stored data
    // this.scorecard = JSON.parse(window.localStorage.getItem("scorecard"));
    // console.log("scorecard", this.scorecard);
    // console.log("date", this.scorecard.date);
    
    
    
  }
  
  goToResult(scorecard) {
    this.navCtrl.push(ResultsPage, {
      scorecard: scorecard
    });
  }
  
}
