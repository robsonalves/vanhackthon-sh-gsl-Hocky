import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConcertPage } from './concert';

@NgModule({
  declarations: [
    ConcertPage,
  ],
  imports: [
    IonicPageModule.forChild(ConcertPage),
  ],
})
export class ConcertPageModule {}
