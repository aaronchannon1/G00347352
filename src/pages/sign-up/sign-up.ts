import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ContactPage } from '../contact/contact';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,public alertCtrl: AlertController) {
  this.restoreData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  public accountArray = [];

  create(name,user,email,pass){

    var accounts = {
      profileName: name,
      username: user,
      profileEmail: email,
      password: pass
    };

    this.accountArray[this.accountArray.length] = accounts;

    this.storage.set('accounts',this.accountArray).then((data)=>{
      console.log(data);
    });
    this.navCtrl.push(ContactPage);
    this.showAlert();
  }

restoreData(){
  var count; 
  
  this.storage.get('accounts').then((data)=>{
    count = data.length;
  });

  this.storage.get('accounts').then((data) =>{
    for (let i = 0; i< count; i++) {
      this.accountArray.push(data[i])
    }
    
    console.log(this.accountArray);
  });

}

showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Account Created!',
    subTitle: 'You can now sign in!',
    buttons: ['OK']
  });
  alert.present();
}


}
