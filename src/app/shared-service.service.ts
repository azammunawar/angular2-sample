import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class SharedServiceService {

  constructor() {

  }

  public data:any = 'hello';

  public value = new Subject();
   update(value){
     this.value.next(value);
   }


}
