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

  events: Observable<Event[]>;

  constructor(
    public navCtrl: NavController,
    public eventService: EventService
  ) {  }

  ngOnInit(){   
    // this.eventService.getTodaysEvents()
    //   .subscribe(
    //     (data) => {
    //       this.events = data,
    //       console.log(data)
    //     }
    //   )
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
