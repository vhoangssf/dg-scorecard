import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LobbyPage } from '../pages/lobby-page/lobby-page';
import { ScorecardPage } from '../pages/scorecard-page/scorecard-page';
import { ResultsPage } from '../pages/results-page/results-page';

let injections = [
  MyApp,
  LobbyPage,
  ScorecardPage,
  ResultsPage
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
