import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import {AuthService} from './auth.service';
import { FilterComponent } from './filter/filter.component';
import { ListingsComponent } from './listings/listings.component';
import {SharedServiceService} from './shared-service.service';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard],},

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    FilterComponent,
    ListingsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard, AuthService, SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
