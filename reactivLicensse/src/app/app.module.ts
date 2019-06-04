import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import { HeaderLayerComponent } from './header-layer/header-layer.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import {UserService} from "./service/user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';
import {HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './search/search.component';
import { UtilComponent } from './util/util.component';
import { OrganizationComponent } from './organization/organization.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLayerComponent,
    LoginComponent,
    RegistrationComponent,
    LeftSideNavComponent,
    SearchComponent,
    UtilComponent,
    OrganizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
