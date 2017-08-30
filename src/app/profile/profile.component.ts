import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private router: Router) {
  }
  // class members
  // functions
  queryParamChange() {
      this.router.navigate(['profile'], {queryParams: {page: 45}});
    }
  ngOnInit() {
    // subscribe to router event and get queryparams subscried
    this.activateRoute.queryParams.subscribe((params) => {
      let userId = params;
      console.log('userId', userId);
    });

  }

}
