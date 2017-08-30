import {Component, OnInit, Input} from '@angular/core';
import {SharedServiceService} from '../shared-service.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/Rx';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  @Input()
  count;

  constructor(private shared: SharedServiceService) {
  }

  doSomethingNow() {
    this.email = this.shared.data;
  }

  public email: string = this.shared.data;


  ngOnInit() {
    console.log('count', this.count);
    this.shared.value
      .subscribe((value: any) => this.email = value);


  }

}
