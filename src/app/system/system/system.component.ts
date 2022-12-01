import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    const user: string | null = window.localStorage.getItem('user');
    user === null ? this.router.navigate(['/login']) : undefined;  
  }
}
