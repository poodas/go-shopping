import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.styl"]
})
export class AppComponent {
  title = "go-shopping";
  abc = "Pooja";
  visible: boolean = false;

  constructor(private router: Router) {
    console.log(this.abc);
  }

  public goAccesories() {
    this.router.navigate(["/dialogContainer"]);
  }

  navigateToLogin() {
    //this.router.navigate(["/login"]);
    this.visible = true;
  }
}
