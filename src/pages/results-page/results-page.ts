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
      this.scorecard = navParams.get('scorecard');
      console.log(navParams.get('scorecard'));
      this.sum = this.totalScore(this.scorecard);
  }
  
  // calculate total score
  totalScore(scorecard) {
    let sum = 0;
    for(var i = 0; i < scorecard.score.length; i++) {
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
