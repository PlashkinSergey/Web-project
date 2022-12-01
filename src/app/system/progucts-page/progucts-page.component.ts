import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Film} from "../shared/models/films.models";
import {ProductService} from "../shared/services/film.service";

@Component({
  selector: 'app-progucts-page',
  templateUrl: './progucts-page.component.html',
  styleUrls: ['./progucts-page.component.css']
})
export class ProguctsPageComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  films!: Film[];
  ngOnInit(): void {
    this.productService.getFilms().subscribe(
      (products: Film[] | undefined) => {
        if (products) {
          this.films = products;
        } else {
          this.films = new Array<Film>();
        }
      }
    )
  }
  deleteProduct(product:Film): void {
    this.productService.deleteProduct(product).subscribe();
  }
}
