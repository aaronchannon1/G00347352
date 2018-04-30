import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IgnDataProvider} from '../../providers/ign-data/ign-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  descriptionList = [];

  constructor(public navCtrl: NavController, private ignData: IgnDataProvider) {
    this.getData();
  }

  getData(){
    //this.ignData.getData().subscribe(data => this.descriptionList = data);
    this.ignData.getData().subscribe(data => console.log(data));
  }

}
