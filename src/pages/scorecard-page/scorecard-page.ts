import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { ResultsPage } from '../results-page/results-page';
import { Scorecard } from '../../providers/scorecard';

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
  /*},{
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
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public scorecardService: Scorecard
    ) {
    // console.log(this.par);
    
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorecardPage');
    this.slides.lockSwipes(true);

  }  
    
    basketRes = {
      basketNumber: [],
      par: [],
      throws: [],
      score: [],
      userId: "",
      createDate: ""
    };
    
    // When a user has entered in par and throws, user can click
    // and move onto next slide and data is pushed into corresponding arrays
    slideNext(basket) {
      // console.log( isNaN( this.basketRes.par.push(parseInt(basket.par)) ) )
      // if ( 
      //   isNaN( this.basketRes.par.push(parseInt(basket.par)) ) === true 
        // isNaN( this.basketRes.throws.push(parseInt(basket.throws)) ) === true 
      // ) {
      //   return alert("Please enter valid Par and/or Throws");
        // } else {
          console.log(basket);
          this.basketRes.basketNumber.push(this.slides.getActiveIndex() + 1);
          this.basketRes.par.push(parseInt(basket.par));
          this.basketRes.throws.push(parseInt(basket.throws));
          this.basketRes.score.push(basket.throws - basket.par);
          console.log(this.basketRes);
          console.log(this.slides.getActiveIndex());
          
          if(this.slides.getActiveIndex() + 1 !== this.apiBaskets.length) {
            this.slides.lockSwipes(false);
            this.slides.slideTo(this.slides.getActiveIndex() +1 );
            this.slides.lockSwipes(true);
            
          } else {
              //user has finished playing round of disc golf
              //push date and userId into basketRes with the arrays
              this.basketRes.createDate = new Date().toISOString();
              this.basketRes.userId = window.localStorage.userId;
              let token = window.localStorage.getItem('token');
              this.scorecardService.saveScorecard(this.basketRes, token)
                .map(res => res.json())
                .subscribe(res =>{
                  console.log("basket", this.basketRes);
                  this.navCtrl.setRoot(ResultsPage, {
                    scorecard: this.basketRes
                });
                }, error => {
                  alert("Scorecard Results Error");
                  console.log(error);
                
            });
      }
    }  
   // }
}
