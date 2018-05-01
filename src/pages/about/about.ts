import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  myNote:string;
  savedNote:string;

  constructor(public navCtrl: NavController,private storage: Storage) {
    this.restoreData()
  }

  public discussArray = [];

  addNote(myNote){

    var discuss = {
      note: myNote
    };
    var account;
    //this.storage.clear();

    this.storage.get('loginNumber').then((data)=>{
      account = data;
    });

    this.storage.get('accounts').then((data)=>{
      this.discussArray[this.discussArray.length] = data[account].username+": "+discuss.note;
    });
    
    

    this.storage.set('discussion',this.discussArray).then((data)=>{
      console.log(this.discussArray);
    });
  }

  // ionViewWillEnter(){
  //   this.storage.get("myNote").then((data) => {
  //     this.savedNote = data;
  //   });
  // }


restoreData(){
  var count; 
  
  this.storage.get('discussion').then((data)=>{
    count = data.length;
  });

  this.storage.get('discussion').then((data) =>{
    for (let i = 0; i< count; i++) {
      this.discussArray.push(data[i])
    }
    
    console.log(this.discussArray);
  });

}



}
