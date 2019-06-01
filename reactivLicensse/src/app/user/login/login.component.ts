import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',  [Validators.required, Validators.minLength(6)]],
    });
  }
  onLogin() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.userService.loginUser(this.loginForm.value).subscribe( (res: any) => {
        if (res) {
          console.log(res);
          localStorage.setItem('token', res.token );
          localStorage.setItem('status', res.result)
          this.router.navigate(['/']);
        } else {
          alert( 'error');
        }
      });
    } else {
      alert( 'enter data'); }
  }

}
