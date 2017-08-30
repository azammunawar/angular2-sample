import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {

  constructor() { }
  dataArray: object = {};
  login(username, password, callback) {
    if(username == 'admin' && password =='admin'){
      localStorage.setItem('auth', username);
      callback('you have logged in succesfully');
    }
    else {
      callback('you have failed to log in succesfully');
    }

  }
  islogin(){
    var auth = localStorage.getItem('auth');
    if(auth){
      return true;
    }
    else {
      return false;
    }
  }
  logout(callback){
    localStorage.removeItem('auth');
    callback('you have logged out');
  }

}
