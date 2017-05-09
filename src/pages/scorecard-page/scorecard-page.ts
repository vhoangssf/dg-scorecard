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
  // par: number;
  // throws: number;
  // basketsArray: any = [];
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
    // id = window.localStorage.getItem('userId');
    basketRes = {
      basketNumber: [],
      par: [],
      throws: [],
      score: [],
      userId: "string",
      createDate: "date"
    };
  
    slideNext(basket) {
      //two way binding, combine the par and throws into a local object
      // let basketRes = {
      //   par: parseInt(basket.par),
      //   throws: parseInt(basket.throws),
      //   score: basket.throws - basket.par,
      // }
      
      
      
      console.log(basket);
      // this.basketsArray.push(basketRes);
      this.basketRes.basketNumber.push(this.slides.getActiveIndex() + 1);
      this.basketRes.par.push(parseInt(basket.par));
      this.basketRes.throws.push(parseInt(basket.throws));
      this.basketRes.score.push(basket.throws - basket.par);
      
      console.log(this.basketRes);
      console.log(this.slides.getActiveIndex());
      if(this.slides.getActiveIndex() + 1 !== this.apiBaskets.length) {
        // console.log("basketsArray", this.basketsArray);
        this.slides.lockSwipes(false);
        this.slides.slideTo(this.slides.getActiveIndex() +1 );
        this.slides.lockSwipes(true);  
      } else {
          //create the date for finishing the round of disc golf, 
          //send user to results page along with the data
          // let scorecard = this.createDate(this.basketsArray);
          
          this.basketRes.createDate = new Date().toISOString();
          this.basketRes.userId = window.localStorage.userId;
          let token = window.localStorage.getItem('token');
          this.scorecardService.saveScorecard(this.basketRes, token)
            .map(res => res.json())
            .subscribe(res =>{
              this.navCtrl.setRoot(ResultsPage, {
                results: this.basketRes
            });
            }, error => {
              alert("Scorecard Results Error");
              console.log(error);
            
        });
      }
      
    }

  //create new object and date created
  // createDate(results){
  //   let scorecard = {
  //     date: new Date().toISOString(),
  //     results: results
  //   };
  //   return scorecard;
  // }
}
