import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./shared/services/user.service";
import { SystemModule } from './system/system.module';
import { AuthService } from './shared/services/auth.service';
import { Error404Module } from './error404/error404.module';
import {FilmService} from "./system/shared/services/film.service";


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    SystemModule,
    Error404Module
  ],
  providers: [
    UserService,
    AuthService,
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
