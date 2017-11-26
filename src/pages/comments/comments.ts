import { Component, ViewChild } from '@angular/core';
import { NavParams, LoadingController, Content } from 'ionic-angular';
import { FormControl } from "@angular/forms/src/model";
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  templateUrl: 'comments.html',
  selector: 'page-comments',
})

export class CommentsPage {
  @ViewChild(Content) content: Content;
  eventName: string;
  comments: Array<{commenterName: string, comment: string}>;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public loadCtrl: LoadingController,
  ) {
    this.eventName = this.params.data.name;
    //this.comments = this.params.data.comments;
    //console.log(this.comments);
    console.log(this.params);
    this.comments = [{
        commenterName: 'Donnovan',
        comment: 'Nice game!'
      },
      {
        commenterName: 'Joseph Joestar',
        comment: 'This game will be awesome! Go Canada!'
      },
      {
        commenterName: 'Britney',
        comment: 'Yeeeaaahhh really excited!'
      },
      {
        commenterName: 'Houston',
        comment: 'The stadium is full? Because I forgot to buy a ticket. Please please dont be full.'
      },
      {
        commenterName: 'Joseph Joestar',
        comment: 'This game will be awesome! Go Canada!'
      },
      {
        commenterName: 'Britney',
        comment: 'Yeeeaaahhh really excited!'
      },
      {
        commenterName: 'Houston',
        comment: 'The stadium is full? Because I forgot to buy a ticket. Please please dont be full.'
      },
      {
        commenterName: 'Joseph Joestar',
        comment: 'This game will be awesome! Go Canada!'
      },
      {
        commenterName: 'Britney',
        comment: 'Yeeeaaahhh really excited!'
      },
      {
        commenterName: 'Houston',
        comment: 'The stadium is full? Because I forgot to buy a ticket. Please please dont be full.'
      },
      {
        commenterName: 'Joseph Joestar',
        comment: 'This game will be awesome! Go Canada!'
      },
      {
        commenterName: 'Britney',
        comment: 'Yeeeaaahhh really excited!'
      },
      {
        commenterName: 'Houston',
        comment: 'The stadium is full? Because I forgot to buy a ticket. Please please dont be full.'
      }];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  sendComment(f: FormControl) {
    let load = this.handleLoading();
    load.present();
    this.comments.push({commenterName: 'User', comment: f.value.comment});
    load.dismiss();
    this.scrollToBottom();
    console.log('todo comment service');
    console.log(f.value.comment);
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    })
  }

  handleLoading() {
    return this.loadCtrl.create({
      content: "Wait..."
    });
  }
}
