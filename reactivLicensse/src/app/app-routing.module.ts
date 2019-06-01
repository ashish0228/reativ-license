import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {HomeComponent} from "./home/home.component";
// import {LoginComponent} from "./login/login.component";
// import {LogoutComponent} from "./logout/logout.component";
import {LoginComponent} from "./user/login/login.component";
import {RegistrationComponent} from "./user/registration/registration.component";
import {SearchComponent} from "./search/search.component";
import {UtilComponent} from "./util/util.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'search', component: SearchComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'util', component: UtilComponent},
  // { path: 'login', component: LoginComponent },
  // { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
