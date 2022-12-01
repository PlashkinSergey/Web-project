import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./shared/services/user.service";
import { SystemModule } from './system/system.module';
import { AuthService } from './shared/services/auth.service';
import { ProductService } from './system/shared/services/film.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AuthModule,
    HttpClientModule,
    SystemModule
  ],
  providers: [
    UserService,
    AuthService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
