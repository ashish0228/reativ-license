import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {HomeComponent} from "./home/home.component";
// import {RegistrationComponent} from "./registration/registration.component";
// import {LoginComponent} from "./login/login.component";
// import {LogoutComponent} from "./logout/logout.component";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./user/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent}
  // { path: '', component: AppComponent },
  // { path: 'register', component: RegistrationComponent},
  // { path: 'login', component: LoginComponent },
  // { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
