import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class RewardService {

    constructor(
        private http: Http
    ) { }

    getMyRewards() {
        return this.http.get('assets/data-rewards-samples.json')
            .map(Response => Response.json().reward)
    }
}