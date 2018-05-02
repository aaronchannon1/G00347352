import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  tabs:Tabs;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,public alertCtrl: AlertController) {
  this.restoreData();
  this.tabs = navCtrl.parent;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  public accountArray = [];

  // Passing values from form into function
  create(name,user,email,pass){

    var accounts = {
      profileName: name,
      username: user,
      profileEmail: email,
      password: pass
    };

    //account getting pushed into array
    this.accountArray[this.accountArray.length] = accounts;

    //account getting stored locally
    this.storage.set('accounts',this.accountArray).then((data)=>{
      console.log(data);
    });

    //when signed up it pops the tab and brings you back to the home page
    let Outer = this;
    this.navCtrl.pop();
    Outer.tabs.select(0);
    this.showAlert();
  }
//restores account data when App is launched again
restoreData(){
  var count; 

  //gets account data
    this.storage.get('accounts').then((data) =>{
      console.log("Data:");
      console.log(data);
      //if the data is null it crashes the app thats what this if prevents
      if(data != null){
        count = data.length;
        //restoring data in the array
        for (let i = 0; i< count; i++) {
          this.accountArray.push(data[i])
        }
        
        console.log(this.accountArray);
      }
    });
  
}

//Alerts you when you create an account
showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Account Created!',
    subTitle: 'You can now sign in!',
    buttons: ['OK']
  });
  alert.present();
}


}
