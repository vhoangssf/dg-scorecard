import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ResultsPage } from '../results-page/results-page';
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
  throws: number;
  
  basket: any = {};
  apiBaskets = [{
  "basketTitle": 1
  },{
  "basketTitle": 2
  },{
  "basketTitle": 3
  /*},{
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
  "basketTitle": 18*/
  }];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.par);
    console.log(this.basketsArray);
    this.basket = {
      "par": 0,
      "throws": 0
    }
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorecardPage');
    //this.slides.lockSwipes(true);
    console.log(this.basket);
    
  }  
    basketsArray: any = [];
    slideNext(basketResult) {
      console.log(basketResult);
      this.basketsArray.push(basketResult);
      if(this.slides.getActiveIndex() + 1 !== this.apiBaskets.length) {
        //this.slides.lockSwipes(false);
        
        this.slides.slideTo(this.slides.getActiveIndex() +1 );
        //this.slides.lockSwipes(true);  
        
      } else {
        
        
        //let results: any = JSON.parse(window.localStorage.getItem("results")) || [];
        //this..createDate = new Date().toISOString();
        //this.basketsArray.push(this.basket);
        window.localStorage.setItem("basketsArray", JSON.stringify(this.basketsArray));
        console.log("here is the final basketsArray" + this.basketsArray);
        this.navCtrl.setRoot(ResultsPage, {
          results: this.basketsArray
        });
      
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
