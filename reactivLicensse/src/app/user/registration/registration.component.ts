import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',  [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }
  get f() { return this.registrationForm.controls; }
  onRegister() {
    this.submitted = true;
    if (this.registrationForm.valid) {
      console.log('this.registrationForm.valid', this.registrationForm.value);
      const data = {
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password
      }
      console.log('data', data);
      this.userService.userRegistration(data).subscribe((res: any )=> {
        if (res) {
          alert('Registration Done Successfully');
        } else {
          console.log('error no record inserted');
        }
      });
    } else {
      alert('Please fill blank field');
    }
  }

}
