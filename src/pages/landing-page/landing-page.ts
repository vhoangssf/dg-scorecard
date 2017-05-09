import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisterPage } from '../register-page/register-page';
import { LoginPage } from '../login-page/login-page';

/**
 * Generated class for the LandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-landing-page',
  templateUrl: 'landing-page.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }
  
  goRegister() {
    this.navCtrl.push(RegisterPage);
  }
  
  goLogin() {
    this.navCtrl.push(LoginPage);
  }

}
