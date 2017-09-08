import {Component, OnInit} from '@angular/core';
import {SharedServiceService} from '../shared-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private shared: SharedServiceService) {

  }
  // class variables
  public email: string = 'sdsd';

  // class methods
  doSomething(value) {
    this.shared.update(value);
  }
  // hooks
  ngOnInit() {


  }
}
