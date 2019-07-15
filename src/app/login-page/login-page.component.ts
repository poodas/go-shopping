import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  MinLengthValidator
} from "@angular/forms";
import { forbiddenNameValidator } from "./../shared/UserName.validator";
import { Router } from "@angular/router";
import { disableDebugTools } from "@angular/platform-browser";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.styl"]
})
export class LoginPageComponent {
  @Input("visible") public visible;
  get userName() {
    return this.registrationForm.get("userName");
  }
  constructor(private fb: FormBuilder, private router: Router) {}
  title = "Registration Forms";
  registrationForm = this.fb.group({
    userName: [
      "Pooja",
      [Validators.required, Validators.minLength(5), forbiddenNameValidator]
    ],
    password: [""],
    confirmPassword: [""],
    address: this.fb.group({
      city: [""],
      postalCode: [""],
      state: [""]
    })
  });
  loadApi() {
    this.registrationForm.patchValue({
      userName: "Pooja",
      password: "Pooja",
      confirmPassword: "Pooja"
    });
  }
  navigateToHome() {
    this.router.navigate(["/dialogContainer"]);
  }
}
