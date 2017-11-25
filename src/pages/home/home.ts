import { ToastService } from './../../services/toast.service';
import { SigninPage } from './../signin/signin';
import { WalkthroughPage } from './../walkthrough/walkthrough';
import { AuthService } from './../../services/auth.service';
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
    public eventService: EventService,
    public authService : AuthService,
    public toast : ToastService
  ) {  

    this.events$ = this.eventService
      .getTodaysEvents()
      .snapshotChanges()
      .map(changes => {
          return changes.map(c => ({
                  key : c.payload.key, ...c.payload.val()
          }))
      });

      //check for authentication
      this.authService.user$.subscribe(user => {
        if(user) return;

        this.navCtrl.setRoot(SigninPage)
      })
    
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
    let user = this.authService.getActiveUser().email;

    if(user){
        
      if (event.checkedIn){
        this.eventService.joinEvent(event, user);
        this.toast.show(`You have joined the ${event.name} event!!`)

      }else{
        this.eventService.leaveEvent(event, user);
      }
    }else{
      this.navCtrl.setRoot(SigninPage)
    }
  
  }

}
