import {Component, OnInit} from '@angular/core';
import {SharedServiceService} from '../shared-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  doSomething(value) {
    this.shared.update(value);
  }

  constructor(private shared: SharedServiceService) {

  }

  public email: string = this.shared.data;

  ngOnInit() {


  }
}
