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
  login = {};
  @Input('islogin') islogin: string;
  // login form submit function
  onSubmit(value, valid) {
    let componentRef = this;
    if(valid){
      this.AuthService.login(value.name, value.password, function(response){
          componentRef.route.navigate(["/profile"]);

      });
    }
  }




  ngOnInit() {

    }






}
