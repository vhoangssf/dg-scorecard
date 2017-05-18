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

  sum: any;
  scorecard: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
      this.scorecard = this.navParams.get('currentScore');
      console.log("YO", this.navParams.get('currentScore'));
      console.log("scorecard results", this.scorecard.Scorecard)
      this.sum = this.totalScore(this.scorecard);
  }
  
  // calculate total score
  // Total score is currently hardcoded to only add up to 9 baskets, please change if 
  // you decide to allow user to select # of baskets
  totalScore(scorecard) {
    let sum = 0;
    for(var i = 0; i < 8; i++) {
      sum = sum + scorecard.score[i];
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
