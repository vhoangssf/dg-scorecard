import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUser } from '../../providers/app-user';
import { LobbyPage } from '../lobby-page/lobby-page';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {
  
  user: any = {}
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUser: AppUser
    ) {
      window.localStorage.clear();
  }
  
  loginForm(form) {
    if(form.invalid) {
      return alert("Please fill in your email and password");
    }
    
    this.appUser.login(this.user)
    .map(res => res.json())
    .subscribe(res => {
      // handle successful responses and decide what happens next
      console.log(res);
      window.localStorage.setItem('token', res.id);
      window.localStorage.setItem('userId', res.userId);
      this.navCtrl.setRoot(LobbyPage);
    }, error => {
      // inform the user of any known problems that arose, otherwise give a generic failed message
      if (error.status === 404) {
        return alert("Not Found.");
          } else if (error.status === 500) {
            return alert("The world has ended, or the server just isn't online");
          } else if (error.status === 401) {
            return alert("Incorrect Password")
          } else if (error.status === 422) {
            return alert("Unprocessable Entity")
          }
      
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
