import { LoginProvider } from './../../providers/login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {

  userList: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loginProvider: LoginProvider) {
    
  }

  ionViewDidLoad() {

    this.userList = this.loginProvider.getAll();

    console.log('ionViewDidLoad UserListPage');
  }

}
