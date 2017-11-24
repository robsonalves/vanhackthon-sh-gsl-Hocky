import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../services/event.service';



@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
   public eventService : EventService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  join(){
    this.eventService.joinEvent();
  }

}
