import { Http, Response, ResponseOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
/*
  Generated class for the IgnDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IgnDataProvider {

  private url: string = "https://newsapi.org/v2/top-headlines?sources=ign&apiKey=1e0261a70cd64959b191334d107a0f39";

  constructor(private http: Http) {
    console.log('Hello IgnDataProvider Provider');
  }

  getData(){
    return this.http.get(this.url).map(res=>res.json());
  }

}
