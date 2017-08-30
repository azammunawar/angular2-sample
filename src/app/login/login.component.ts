import { Component, OnInit,  AfterViewChecked, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private AuthService: AuthService, private route: Router) { }

  //decorator
  //@Input('islogin') islogin: string;

  //class member
  public login = {};

  // functions
  onSubmit(value, valid) {
    if(valid){
      this.AuthService.login(value.name, value.password, (response) =>{
          this.route.navigate(["/profile"]);

      });
    }
  }




  ngOnInit() {

    }






}
