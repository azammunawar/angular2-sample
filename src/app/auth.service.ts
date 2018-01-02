import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(private http:Http) { }
  dataArray: object = {};
  private serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  login(username, password, callback) {

    // headers set
    var obj = { email: username, password:password };
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers});
    let body = this.serializeObj(obj);
    // login request
     this.http.post('http://localhost:4000/login', body, options).subscribe(data => {
       console.log('data', data);
     });


    // this.http.get('http://localhost:8000/tasks',  options).subscribe(data => {
    //   console.log('data', data);
    // })
    // if(username == 'admin' && password =='admin'){
    //   localStorage.setItem('auth', username);
    //   callback('you have logged in succesfully');
    // }
    // else {
    //   callback('you have failed to log in succesfully');
    // }

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
