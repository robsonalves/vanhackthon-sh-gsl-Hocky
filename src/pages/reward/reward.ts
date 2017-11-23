import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../services/event.service';
import { RewardModel } from '../../models/event.model';

@Component({
  selector: 'page-list',
  templateUrl: 'reward.html'
})
export class RewardPage implements OnInit {
  reward: RewardModel[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eventService: EventService
  ) { }


  ngOnInit() {
    this.eventService.getMyRewards()
      .subscribe(
      (data) => 
      {
        this.reward = data,
        console.log(data);
      })
  }

}
