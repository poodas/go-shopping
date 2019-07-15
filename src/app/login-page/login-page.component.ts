import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { forbiddenNameValidator } from './../shared/UserName.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.styl']
})
export class LoginPageComponent {

  get userName() {
    return this.registrationForm.get('userName');
  }
  constructor (private fb: FormBuilder,private router: Router) {

  }
  title = 'Registration Forms';
      registrationForm  = this.fb.group({
      userName: ['Pooja', [Validators.required,
      Validators.minLength(5), forbiddenNameValidator]],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        postalCode: [''],
        state: ['']
      })
    })

  loadApi() {
   this.registrationForm.patchValue({
      userName: "Pooja",
      password: "Pooja",
      confirmPassword: "Pooja"
    });
  }

  navigateToHome() {
    this.router.navigate(['/dialogContainer']);
  }

}
