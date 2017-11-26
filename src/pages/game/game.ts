import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../services/event.service';
import { EventListService } from '../../services/event-list.service';
import { Observable } from 'rxjs/Observable';
import { EventList } from '../../models/eventlist.model';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  eventlist$: Observable<EventList[]>;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
   public eventlistService : EventListService) {

    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  getData(){
    console.log('getdata');
    this.eventlist$ = this.eventlistService
    .getGameInfo()
    .snapshotChanges()
    .map(changes => {
        return changes.map(c => ({
                key : c.payload.key, ...c.payload.val()
        }))
    });
  }

  join(eventList: EventList){
    console.log('Clicked on Join ', eventList);
  }

}
