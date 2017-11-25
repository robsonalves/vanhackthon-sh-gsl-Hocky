import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { RewardService } from '../../services/reward.service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the RewardDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reward-details',
  templateUrl: 'reward-details.html',
})
export class RewardDetailsPage implements OnInit {
  rewards$: Observable<Event[]>;

  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            public rewardService: RewardService) {
  }

  ngOnInit(): void {
    this.rewards$ = this.rewardService
    .getRewardsDetails()
    .snapshotChanges()
    .map(changes => { 
        return changes.map(c => ({
          key:  c.payload.key, ...c.payload.val()
        }))
    });
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RewardDetailsPage');
  }

}
