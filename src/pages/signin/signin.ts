import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormControl } from "@angular/forms/src/model";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthService,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {}

  onSubmit(f: FormControl){    
    let load = this.handleLoading();
    load.present();
    
    this.auth.signin(f.value.email,f.value.password)
      .then( () => load.dismiss())
      .catch( (error)=> {
        load.dismiss();
        this.handleError(error.message);
      }
      );

      
  }

  loginWithGoogle(){
    let load = this.handleLoading();
    load.present();
    this.auth.signinWhitgGoogle()
      .then( ()=> load.dismiss())
      .catch( (error)=> {
        load.dismiss();
        this.handleError(error.message)
      });
  }


  loginWithFacebook(){
    let load = this.handleLoading();
    load.present();
    this.auth.signinWithFacebook()
      .then( ()=> load.dismiss())
      .catch( (error)=> {
        load.dismiss();
        this.handleError(error.message)
      });   
  }

  handleError(message: string){
    const alert = this.alertCtrl.create({
      title: 'Sing in Error .',
      message: message,
      buttons:['Ok']
    });
    alert.present();
  }

  handleLoading(){
    return this.loadCtrl.create({
      content: "Wait..."
    });
  }




}
