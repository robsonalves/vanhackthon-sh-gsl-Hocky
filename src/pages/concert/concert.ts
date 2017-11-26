import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../services/event.service';
import { EventListService } from '../../services/event-list.service';
import { Observable } from 'rxjs/Observable';
import { EventList } from '../../models/eventlist.model';

/**
 * Generated class for the ConcertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-concert',
  templateUrl: 'concert.html',
})
export class ConcertPage {

  eventlist$: Observable<EventList[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public eventListService: EventListService) {
      this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConcertPage');
  }

  getData() {
    console.log('getdata');
    this.eventlist$ = this.eventListService
      .getConcertInfo()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  join(eventList: EventList) {
    console.log('Clicked on Join ', eventList);

  }
}
