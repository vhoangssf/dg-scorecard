import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LobbyPage } from '../pages/lobby-page/lobby-page';
import { ScorecardPage } from '../pages/scorecard-page/scorecard-page';
import { ResultsPage } from '../pages/results-page/results-page';
import { HistoryPage } from '../pages/history-page/history-page';
import { LandingPage } from '../pages/landing-page/landing-page';
import { RegisterPage } from '../pages/register-page/register-page';
import { LoginPage } from '../pages/login-page/login-page';

import { AppUser } from '../providers/app-user';
import { Scorecard } from '../providers/scorecard';

let injections = [
  MyApp,
  LobbyPage,
  ScorecardPage,
  ResultsPage,
  HistoryPage,
  LandingPage,
  RegisterPage,
  LoginPage
  ]

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    AppUser,
    Scorecard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
