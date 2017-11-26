import { ToastService } from './toast.service';
import { Event, EventJoined } from './../models/event.model';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class EventService{

    
    private eventsRef = this.db.list<Event>('events');
    private eventJoinedRef = this.db.list<EventJoined>('event-joined');
    
    constructor(
        private db: AngularFireDatabase,
    ){ }

    getTodaysEvents(){    
        return this.eventsRef;
    }

    AddEvent(event : Event){
        return this.eventsRef.push(event);
    }

    getAllEvents(){
        return this.eventsRef;
    }

    joinEvent(event : Event, user : string){
      let eventToJoin = new EventJoined();

      eventToJoin.eventKey = event.key,
      eventToJoin.username = user;
      eventToJoin.key = `${user}-${event.key}`;

      return this.eventJoinedRef.push(eventToJoin);
    }

    leaveEvent(event : Event, user : string){

<<<<<<< HEAD
        var eventRef = this.db.object('/event-joined').query
                .orderByChild('key')
                .equalTo(`${user}-${event.key}`)


               
        this.eventJoinedRef.remove(eventRef.ref.key);
     
=======
       var eventToLeave = this.db.list('/event-joined', 
                    ref => ref.orderByChild('eventKey').equalTo(event.key)
                              .orderByChild('username').equalTo(user));
>>>>>>> ba2ad5b6992b272b26544b23b6f07ce1022a9fc5
    }

    likeEvent(event : Event){
    }


}