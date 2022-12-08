import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from './login/login.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { SharedModule } from "../shared/shared.module";
import { NgClass, NgIf } from "@angular/common";
import { SystemRoutingModule } from "../system/system-routing.module";
import { Error404Module } from "../error404/error404.module";

@NgModule({
  declarations:[
    LoginComponent,
    RegistrationsComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
    NgIf,
    NgClass,
    SystemRoutingModule
  ],
  providers: []
})
export class AuthModule {}
