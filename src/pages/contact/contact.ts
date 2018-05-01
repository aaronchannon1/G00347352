import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  accountArray = [];
  constructor(public navCtrl: NavController,private storage: Storage) {
    this.storage.set('username',"1234");
    this.storage.get('username').then((data)=>{
      console.log("username: " + data);
    });
  }
  
  login(user,pass){

    var stringify;

    var newAccount = {
      username: user,
      password: pass
    };

    this.storage.get('accounts').then((data)=>{
      stringify = data;
    });

    //this.accountArray.push(newAccount);

    stringify = stringify + JSON.stringify(newAccount);


    this.storage.set('accounts',stringify).then((data)=>{
      console.log(data);
    });

    //this.storage.set('accounts',user);
  }

getData(){
  this.storage.get('accounts').then((data) =>{
    console.log(data);
  });
}

}
