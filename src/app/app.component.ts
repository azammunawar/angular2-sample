import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AuthService} from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]

})
export class AppComponent {

  constructor(private AuthService: AuthService, private route: Router, private activateRoute: ActivatedRoute) {
    console.log('islogin', this.islogin);
  }

  // class variables
  public title = 'app works!';
  public islogin: boolean = this.AuthService.islogin();

  // class methods
  logout() {
    this.AuthService.logout(() => {
      this.route.navigate(["/"]);
    });
  }



  // hooks
  ngOnInit() {
    // subscribe to router event
    this.activateRoute.params.subscribe((params: Params) => {
      let userId = params;
      console.log(userId);
    });
  }
}
