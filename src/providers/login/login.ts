import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginProvider {

  private static BASE_URL = 'http://localhost:3000/login';

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  login(user: any) {
    return this.http.post(LoginProvider.BASE_URL, user);
  }

  getAll(){
    return this.http.get(LoginProvider.BASE_URL)
                    .map(data => data.json());
  }

}
