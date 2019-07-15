import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule, ShoppingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DialogContentComponent } from "./dialog-content/dialog-content.component";
import { DialogContainerComponent } from "./dialog-container/dialog-container.component";
import { ShoppingService } from "./shopping.service";
import { LoginPageComponent } from "./login-page/login-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingModule,
    DialogContainerComponent,
    DialogContentComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  entryComponents: [DialogContentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
