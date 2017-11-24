import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class EventService{

    constructor(
       private http: Http
    ){}

    getTodaysEvents(){
        return this.http.get('assets/data-samples.json')
            .map(respose => respose.json().events)

    }

    joinEvent(){
        alert('Joined event');
    }

}