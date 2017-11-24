import { Event } from './../models/event.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class EventService{

    private eventsRef = this.db.list<Event>('events');
    
    constructor(private db: AngularFireDatabase){ }

    
    getTodaysEvents(){    
        return this.eventsRef;
    }

    AddEvent(event : Event){
        return this.eventsRef.push(event);
    }

    getAllEvents(){
        return this.eventsRef;
    }

    joinEvent(){
        //TODO: Adds a participant to the event;
    }



}