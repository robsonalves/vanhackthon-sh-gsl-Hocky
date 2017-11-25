import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RewardService } from '../../services/reward.service';
import { RewardModel } from '../../models/reward.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-list',
  templateUrl: 'reward.html'
})
export class RewardPage implements OnInit {
  rewards$: Observable<Event[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rewardService: RewardService
  ) { }


  ngOnInit() {
   this.rewards$ = this.rewardService
    .getMyRewards()
    .snapshotChanges()
    .map(changes => { 
        return changes.map(c => ({
          key:  c.payload.key, ...c.payload.val()
        }))
    });
  }

}
