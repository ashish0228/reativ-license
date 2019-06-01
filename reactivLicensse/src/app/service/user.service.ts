import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Menu} from "../model";

@Injectable()
export class UserService {
  api = environment.API_URL;
  constructor(private http: HttpClient) {  }
  myurl = this.api + 'users';
  userRegistration(body) {
    return this.http.post(this.api + 'users', body );
  }

  loginUser(body) {
    return this.http.post(this.api + 'users/login', body );
  }

  getMenu() :Menu[] {
    return [
      {routerlink: '/', label: 'Home', icon: 'home', isActive: true}
    ] as Menu[];
  }
}
