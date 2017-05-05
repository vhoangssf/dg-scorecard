import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultsPage } from './results-page';

@NgModule({
  declarations: [
    ResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultsPage),
  ],
  exports: [
    ResultsPage
  ]
})
export class ResultsPageModule {}
