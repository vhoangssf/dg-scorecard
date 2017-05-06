import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../results-page/results-page';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  
  scorecard: any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    this.scorecard = JSON.parse(window.localStorage.getItem("scorecard"));
    console.log("scorecard", this.scorecard);
    
  }
  
  goToResult(scorecard) {
    this.navCtrl.push(ResultsPage, {
      results: scorecard
    });
  }
  
}
