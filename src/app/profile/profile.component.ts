import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ListingsComponent} from '../listings/listings.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {
  // decorators
  // @view child decorator is used to acces child component data
  @ViewChild(ListingsComponent) listingcomp: ListingsComponent;
  // constructors

  constructor(private activateRoute: ActivatedRoute, private router: Router) {

  }

  // class variables
  public number = '465454';
  // class methods
  queryParamChange() {
    this.router.navigate(['profile'], {queryParams: {page: 45}});
  }

  countchange(event) {
    this.number = event;
  }

  // hooks
  ngOnInit() {
    // alter child component's public attribute/variable/field from this(parent) component
    this.listingcomp.email = 'ali';
    setTimeout(() => {
      this.number = '123';
    }, 1000);
    // subscribe to router event and get queryparams subscried
    this.activateRoute.queryParams.subscribe((params) => {
      let userId = params;
      console.log('userId', userId);
    });

  }

}
