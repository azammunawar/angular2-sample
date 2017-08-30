import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpServiceService {

  constructor(private http: Http) {
  }
  // class members
  // functions
  getUsers() {
    this.http.get('').subscribe(res => {

    });
  }
}
