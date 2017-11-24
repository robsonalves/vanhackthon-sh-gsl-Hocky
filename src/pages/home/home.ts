import { Observable } from 'rxjs/Rx';

import { Component} from '@angular/core';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { NavController } from 'ionic-angular';
import { Event } from "../../models/event.model";
import { EventService } from "../../services/event.service";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  events$: Observable<Event[]>;

  constructor(
    public navCtrl: NavController,
    public eventService: EventService
  ) {  

    this.events$ = this.eventService
      .getTodaysEvents()
      .snapshotChanges()
      .map(changes => {
          return changes.map(c => ({
                  key : c.payload.key, ...c.payload.val()
                }))
              });
    
  }


  onLike(event: Event){
    event.liked = !event.liked;    
    if (event.liked)
      event.likes ++;    
    else
      event.likes --;
    
  }

  onCheckIn(event: Event){
    event.checkedIn = !event.checkedIn;
  }

}
