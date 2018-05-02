import { Component } from '@angular/core';
import { NavController, Tabs, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {SignUpPage} from '../sign-up/sign-up';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  
  tabs:Tabs;
  constructor(public navCtrl: NavController,private storage: Storage,public alertCtrl: AlertController) {
    this.restoreData();
    this.loginTrue();
    //Code for switching tabs once logged in
    this.tabs = navCtrl.parent;
  }

  public found = 1;
  public accountArray = [];
  public accountNumber;

  login(user,pass){
    var count; 
    //Getting data from local storage
    this.storage.get('accounts').then((data)=>{

      //if the data is null it crashes the app thats what this if prevents
      if(data != null){
        count = data.length;
        //checking valid username and login
        for (let i = 0; i< count; i++) {
          //If username and password found
        if(data[i].username == user && data[i].password == pass){
            console.log(this.accountArray);
            this.found=0;
            this.accountArray.push(data[i]);
            //adds index of array to local storage
            this.storage.set('loginNumber',i).then((data) =>{
              this.accountNumber = data;
              console.log(data);
              
            });
  
          }
        }
        //if found
        if(this.found == 0){
          //Set logged in to true
          this.storage.set('loginTrue',true).then((data) =>{
            console.log(data);
          });
    
          //Bring you back to home screen and alert
          let Outer = this;
          Outer.tabs.select(0);
          this.showAlertFound();

          console.log(this.accountArray);
        }else{
          //Set logged in to true
          this.storage.set('loginTrue',false).then((data) =>{
            console.log(data);
          });
          //Bring you back to login screen and alert
          let Outer = this;
          Outer.tabs.select(2);
          this.showAlertNotFound();
        }
        //Alert that there are no accounts in local storage
      }else{
        this.noAccounts();
      }

    });

  }

  //restores account data when App is launched again
  restoreData(){
    var count; 
    //gets account data from local storage
    this.storage.get('accounts').then((data) =>{

      //if the data is null it crashes the app thats what this if prevents
      if(data != null){
        count = data.length;

        //pushes account data into array
        for (let i = 0; i< count; i++) {
          this.accountArray.push(data[i])
        }
        
        console.log(this.accountArray);
      }

    });
    
  }

  //Create account page
  signUpPage(){
    this.navCtrl.push(SignUpPage);
  }

  //clears local storage(test function)
  clear(){
    this.storage.clear();
  }

  // Alert
  showAlertFound() {
    let alert = this.alertCtrl.create({
      title: 'Login Successful!',
      subTitle: 'You can now use chat',
      buttons: ['OK']
    });
    alert.present();
  }

  // Alert
  showAlertNotFound() {
    let alert = this.alertCtrl.create({
      title: 'Invalid Username or Password',
      subTitle: 'Please Try Again.',
      buttons: ['OK']
    });
    alert.present();
  }

  // Alert
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Logged Out',
      subTitle: 'You have been logged out.',
      buttons: ['OK']
    });
    alert.present();
  }

  // Alert
  noAccounts(){
    let alert = this.alertCtrl.create({
      title: 'No Accounts Found',
      subTitle: 'Please create an account.',
      buttons: ['OK']
    });
    alert.present();
  }

  //Changes Found varible for ngIf to true
  loginTrue(){
    this.found = 1;
      
  }

  //Changes Found varible for ngIf to false
  logOut(){
    this.found = 1;
    let Outer = this;
    Outer.tabs.select(0);
    this.showAlert();
  }

}
