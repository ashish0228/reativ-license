import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./service/user.service";
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
