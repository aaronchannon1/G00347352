import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IgnDataProvider} from '../../providers/ign-data/ign-data';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  constructor(public navCtrl: NavController, private ignData: IgnDataProvider, private vibration: Vibration) {
    //On Load calls function
    this.getIgnData();
  }
  
  articlesList:any = [];

  getIgnData(){
    //Subscribing to the provider
    this.ignData.getData().subscribe(data => {
      for(let i = 0; i < 10; i++)  { 
        this.articlesList.push(data.articles[i])
      }
      console.log(this.articlesList);
    })
  }


  //Vibrate function// IMPORTANT -- also incorporated when your switch tabs on android
  vibrate(){
    this.vibration.vibrate(30);
  }


}
