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
  // class member
  public email: string = this.shared.data;
  // functions
  doSomething(value) {
    this.shared.update(value);
  }

  ngOnInit() {


  }
}
