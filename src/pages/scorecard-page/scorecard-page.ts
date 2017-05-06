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
  basketsArray: any = [];
  apiBaskets = [{
  "basketTitle": 1
  },{
  "basketTitle": 2
  /*},{
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
  "basketTitle": 18*/
  }];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.par);
    
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorecardPage');
    //this.slides.lockSwipes(true);
   // console.log(this.basket);
  // this.basket = {
  //     "par": 0,
  //     "throws": 0
  //   }
    
  }  
    
  
    slideNext(basket) {
      //two way binding, combine the par and throws into a local object
      let basketRes = {
        par: basket.par,
        throws: basket.throws,
        score: basket.throws - basket.par
      }
      console.log(basket);
      this.basketsArray.push(basketRes);
      console.log(this.basketsArray);
      console.log(this.slides.getActiveIndex());
      if(this.slides.getActiveIndex() + 1 !== this.apiBaskets.length) {
        console.log("this is the beginning basketsArray", this.basketsArray);
        //this.slides.lockSwipes(false);
        this.slides.slideTo(this.slides.getActiveIndex() +1 );
        //this.slides.lockSwipes(true);  
      } else {
        //let results: any = JSON.parse(window.localStorage.getItem("results")) || [];
        //this..createDate = new Date().toISOString();
        //this.basketsArray.push(this.basket);
        // window.localStorage.setItem("basketsArray", JSON.stringify(this.basketsArray));
        console.log("here is the final basketsArray", this.basketsArray);
        this.navCtrl.setRoot(ResultsPage, {
          results: this.basketsArray
        });
      
      }
 
    }
}
