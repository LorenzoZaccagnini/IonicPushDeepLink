import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private oneSignal: OneSignal) {
    this.initOneSignal();
  }

  initOneSignal(){
    this.oneSignal.startInit('4463a513-4da9-498a-94ac-12ade4dd2f73', '429391849888');

this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

this.oneSignal.handleNotificationReceived().subscribe(() => {
 // do something when notification is received
});

this.oneSignal.handleNotificationOpened().subscribe(() => {
  // do something when a notification is opened
});

this.oneSignal.endInit();
  }

}
