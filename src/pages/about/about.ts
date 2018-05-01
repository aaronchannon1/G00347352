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
    
  }

  addNote(){
    this.storage.set("myNote",this.myNote);
    this.storage.get("myNote").then((data) => {
      this.savedNote = data;
    });
  }

  ionViewWillEnter(){
    this.storage.get("myNote").then((data) => {
      this.savedNote = data;
    });
  }

}
