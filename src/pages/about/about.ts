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

    this.restoreData();

  }

  public discussArray = [];
  public username;

  //Adds a note from input box
  addNote(myNote){

    var note = myNote;

    //pushes message/note to array
    this.discussArray.push("Anonymous: " + note);
    //sets local storage to the array
    this.storage.set('discussion',this.discussArray).then((data)=>{
      console.log("set data");
      console.log(data);
    });

      console.log(this.discussArray)
  }

  //Restores data from local storage
  restoreData(){
    var count; 

    this.storage.get('discussion').then((data) =>{
      
      //if the data is null it crashes the app thats what this if prevents
      if(data != null){
      
        count = data.length;
        
        for (let i = 0; i< count; i++) {
          this.discussArray.push(data[i])
        }
        
        console.log(this.discussArray);
      }

    });

  }

  //Clear local storage(Test function)
  clear(){
    this.storage.clear();
  }

}
