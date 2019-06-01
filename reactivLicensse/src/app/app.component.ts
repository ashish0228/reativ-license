import { Component } from '@angular/core';
import {UserService} from "./service/user.service";
import {Menu} from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactivLicensse';
  public menus: Menu[];
  constructor(private userService: UserService) {
    this.menus = this.userService.getMenu();
  }
}
