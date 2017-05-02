import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScorecardPage } from './scorecard-page';

@NgModule({
  declarations: [
    ScorecardPage,
  ],
  imports: [
    IonicPageModule.forChild(ScorecardPage),
  ],
  exports: [
    ScorecardPage
  ]
})
export class ScorecardPageModule {}
