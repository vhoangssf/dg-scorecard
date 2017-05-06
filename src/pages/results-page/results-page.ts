import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LobbyPage } from '../lobby-page/lobby-page';

/**
 * Generated class for the ResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-results-page',
  templateUrl: 'results-page.html',
})
export class ResultsPage {

  results: any;
  sum: any;
  scorecard: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    ) {
      this.scorecard = navParams.get('results');
      this.results = this.scorecard.results;
      console.log(navParams.get('results'));
      this.sum = this.totalScore(this.scorecard);
      window.localStorage.setItem("scorecard", JSON.stringify(this.scorecard));
  }
  
  
  // calculate total score
  totalScore(scorecard) {
    let sum = 0;
    for(var i = 0; i < scorecard.results.length; i++) {
      sum = sum + scorecard.results[i].score;
    }
    console.log("sum", sum);
    return sum;
  }
      
  goLobby() {
    this.navCtrl.setRoot(LobbyPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
    
  }

}
