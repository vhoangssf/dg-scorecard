import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    ) {
      this.results = navParams.get('results');
      console.log(navParams.get('results'));
  }
  
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

}
