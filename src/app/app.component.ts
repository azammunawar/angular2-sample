import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]

})
export class AppComponent  {
  public title = 'app works!';
  logout(){
    this.AuthService.logout(() =>{
      this.route.navigate(["/"]);
    });
  }

   public islogin:boolean = this.AuthService.islogin();

  constructor(private AuthService: AuthService, private route: Router) {
    console.log('islogin', this.islogin);
  }
}
