import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../services/event.service';
import { EventListService } from '../../services/event-list.service';
import { Observable } from 'rxjs/Observable';
import { EventList } from '../../models/eventlist.model';
import { Event } from '../../models/event.model';
import { EarnService } from '../../services/earn.service';
import { ToastService } from '../../services/toast.service';

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
    private eventlistService: EventListService,
    private EventService: EventService,
    private earnService: EarnService,
    private toast: ToastService) {

    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  getData() {
    console.log('getdata');
    this.eventlist$ = this.eventlistService
      .getGameInfo()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  join(eventList: EventList) {
    console.log('Clicked on Join ', eventList);

    let event: Event = {
      name: eventList.title,
      eventType: eventList.key.split('-')[0],
      description: eventList.desc,
      date: eventList.date,
      imgUrl: eventList.img,
      comments: 15,
      likes: 2,
      liked: false,
      checkedIn: false,
    };

    this.EventService.AddEvent(event);
    this.earnService.addRewardFromEvent(event);
    this.toast.show(`You have joined the ${event.name} event!!`)
  }

}
