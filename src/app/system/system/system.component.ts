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
    this.route.queryParams.subscribe((params: Params) => {
      !params['InLogin'] ? this.router.navigate(['login']) : "";
    })    
  }
}
