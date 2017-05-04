import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { LobbyPage } from '../lobby-page/lobby-page';
/**
 * Generated class for the ScorecardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// let apiBaskets = [{
//   "basketNumber": 1
//   },{
//   "basketNumber": 2
//   },{
//   "basketNumber": 3
// }]

@IonicPage()
@Component({
  selector: 'page-scorecard-page',
  templateUrl: 'scorecard-page.html',
})
export class ScorecardPage {
  @ViewChild(Slides) slides: Slides;
  par: number;
  score: number;
  baskets: any = [];
  basketResult: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.par);
    console.log(this.score);
    this.basketResult = {
      "par": 0,
      "score": 0
    }
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorecardPage');
    //this.slides.lockSwipes(true);
     console.log(this.basketResult);
    
  }  
    slideNext() {
      console.log(this.basketResult);
      this.basketResult++;
      if(this.slides.getActiveIndex() + 1 !== 18) {
        //this.slides.lockSwipes(false);
        this.slides.slideTo(this.slides.getActiveIndex() +1);
        //this.slides.lockSwipes(true);  
      } else {
        let result: any = JSON.parse(window.localStorage.getItem("result")) || [];
        this.basketResult.createDate = new Date().toISOString();
        result.push(this.basketResult.basket);
        window.localStorage.setItem("result", JSON.stringify(result));
        this.navCtrl.setRoot(LobbyPage);
      
    }
  // submitScore(par, score){
  //   nextslide();
    
  //CREATE A ngSubmit FORM!!! just like appUsers from TKTest 
  //ngSubmit will push it into apiScorecard
  //focus on binding inputs and selects (par and score) #template variable
  //use TKTest 
  //}
    }
}
