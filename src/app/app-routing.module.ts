import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: "", component: LoginPageComponent},
  {path: "login", component: LoginPageComponent},
  {path: "home", component: HomePageComponent},
  {path: "header", component: HeaderComponent},
  {path: "searchbar", component: SearchBarComponent},
  {path: "dialogContainer", component: DialogContainerComponent},
  {path: "dialogContent", component: DialogContentComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ShoppingModule = [
  HeaderComponent, SearchBarComponent
]
