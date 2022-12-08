import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }
  ngOnInit(): void {
    const user: string | null = window.sessionStorage.getItem('user')!;
    user === null ? this.router.navigate(['/login']) : undefined;  
  }
}
