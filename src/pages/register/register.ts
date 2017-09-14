import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  registerUser(){
    console.log("Would register user with :", this.username.value, this.password.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
