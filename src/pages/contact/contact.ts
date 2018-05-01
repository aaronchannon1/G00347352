import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {SignUpPage} from '../sign-up/sign-up';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  //accountArray = [];
  constructor(public navCtrl: NavController,private storage: Storage) {
    this.restoreData();
  }
  
  public accountArray = [];

  login(user,pass){
    var count; 
  
    this.storage.get('accounts').then((data)=>{
      count = data.length;
    });
  
    this.storage.get('accounts').then((data)=>{
      for (let i = 0; i< count; i++) {
      if(data[i].username == user && data[i].password == pass){
          console.log("found");
          this.storage.set('loginNumber',i).then((data) =>{
            console.log(data);
          })
        }else{
          console.log("not found");
        }
      }
    });
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

signUpPage(){
  this.navCtrl.push(SignUpPage);
}

clear(){
  this.storage.clear();
}

}
