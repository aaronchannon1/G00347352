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
    this.getIgnData();
  }
  articlesList:any = [];
  getIgnData(){

    //this.ignData.getData().subscribe(data => console.log(data));
    this.ignData.getData().subscribe(data => {
      //console.log(data);
      for(let i = 0; i < 10; i++)  { 
        this.articlesList.push(data.articles[i])
      }
      console.log(this.articlesList);
    })
    //this.ignData.getData().subscribe(data => this.articlesList = data);
    
  }


    vibrate(){
      this.vibration.vibrate(30);
    }
  

}
