import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SharedServiceService} from '../shared-service.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  // decorators
  @Input() count;

  @Output() change = new EventEmitter();

  constructor(private shared: SharedServiceService) {

  }

  // class methods
  doSomethingNow() {
    this.email = this.shared.data;
  }

  upvote() {
    this.count++;
    this.change.emit(this.count);
  }

  // class variables
  public email: string = 'azam';

  // hooks
  ngOnInit() {
    console.log('count', this.count);
    this.shared.value
      .subscribe((value: any) => this.email = value);


  }

}
