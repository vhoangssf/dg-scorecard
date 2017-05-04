import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { LobbyPage } from '../lobby-page/lobby-page';
/**
 * Generated class for the ScorecardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-scorecard-page',
  templateUrl: 'scorecard-page.html',
})
export class ScorecardPage {
  @ViewChild(Slides) slides: Slides;
  par: number;
  score: number;
  basketsArray: any = [];
  basket: any = {};
  apiBaskets = [{
  "basketTitle": 1
  },{
  "basketTitle": 2
  },{
  "basketTitle": 3
  },{
  "basketTitle": 4
  },{
  "basketTitle": 5
  },{
  "basketTitle": 6
  },{
  "basketTitle": 7
  },{
  "basketTitle": 8
  },{
  "basketTitle": 9
  },{
  "basketTitle": 10
  },{
  "basketTitle": 11
  },{
  "basketTitle": 12
  },{
  "basketTitle": 13
  },{
  "basketTitle": 14
  },{
  "basketTitle": 15
  },{
  "basketTitle": 16
  },{
  "basketTitle": 17
  },{
  "basketTitle": 18
  }];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.par);
    console.log(this.basketsArray);
    this.basket = {
      "par": 0,
      "score": 0
    }
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorecardPage');
    //this.slides.lockSwipes(true);
    console.log(this.basket);
    
  }  
    slideNext(basketResult) {
      console.log(basketResult);
      
      if(this.slides.getActiveIndex() + 1 !== this.apiBaskets.length) {
        //this.slides.lockSwipes(false);
        this.basketsArray.push(this.basket);
        this.slides.slideTo(this.slides.getActiveIndex() +1);
        //this.slides.lockSwipes(true);  
        console.log(this.basketsArray);
      } else {
        window.localStorage.setItem("basketsArray", JSON.stringify(this.basketsArray));
        // let result: any = JSON.parse(window.localStorage.getItem("result")) || [];
        // this.basket.createDate = new Date().toISOString();
        // basketsArray.push(this.basket);
        // window.localStorage.setItem("result", JSON.stringify(result));
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
