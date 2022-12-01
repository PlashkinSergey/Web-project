import { NgModule, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationsComponent } from './registrations/registrations.component';

const routes: Routes = [
  { path:'', component: AuthComponent, children: [
      { path:'login', component: LoginComponent},
      { path: 'registrations', component: RegistrationsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule implements OnInit  {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(["",'/login']);
  }
}
