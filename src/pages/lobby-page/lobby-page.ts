import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScorecardPage } from '../scorecard-page/scorecard-page';
import { HistoryPage } from '../history-page/history-page';
/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby-page',
  templateUrl: 'lobby-page.html',
})
export class LobbyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }
  
  startScorecard() {
    this.navCtrl.push(ScorecardPage);
  }
  goHistory() {
    this.navCtrl.push(HistoryPage)
  }
}
