import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  type: string = "";
  films$!: Observable<Film[]>;
  ngOnInit(): void {
    this.films$ = this.productService.getFilms();
  }
  deleteProduct(product:Film): void {
    this.productService.deleteProduct(product).subscribe();
  }
  getMidleScoreFilm(film: Film): number {
    if (film.scores?.length === 0) {
      return 0;
    }
    let sum: number = 0;
    film.scores?.forEach(score => sum += +score);
    return sum / film.scores?.length;
  }
}
