import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventModel } from "../../models/event.model";
import { EventService } from "../../services/event.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements OnInit {
  events: EventModel[] = [];
   
  constructor(
    public navCtrl: NavController,
    public eventService: EventService
  ) {  }

  ngOnInit(){   
    this.eventService.getTodaysEvents()
      .subscribe(
        (data) => {
          this.events = data,
          console.log(data)

        }
      )
  }

  onLike(event: EventModel){
    event.liked = !event.liked;    
    if (event.liked)
      event.likes ++;    
    else
      event.likes --;
    
  }

  onCheckIn(event: EventModel){
    event.checkedIn = !event.checkedIn;
  }

}
