import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  date: Date = new Date();
  user!: User;
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onlogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth', 'login'])
  }
  ngOnInit(): void {
    this.user =  JSON.parse(window.sessionStorage.getItem('user')!);
  }

}
