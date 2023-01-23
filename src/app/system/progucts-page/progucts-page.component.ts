import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Film} from "../shared/models/films.models";
import {FilmService} from "../shared/services/film.service";

@Component({
  selector: 'app-progucts-page',
  templateUrl: './progucts-page.component.html',
  styleUrls: ['./progucts-page.component.css']
})
export class ProguctsPageComponent implements OnInit {
  constructor(
    private productService: FilmService,
  ) { }
  name: string = "";
  films$!: Observable<Film[]>;
  type: number = 0;
  ngOnInit(): void {
    this.films$ = this.productService.getFilms();
  }
  checked1: boolean = false;
  checked2: boolean = false;
  sortType(type: number): void {
    this.type = type;
    if (type === 2) {
      this.checked1 = !this.checked1;
      if (this.checked2) {
        this.checked2 = !this.checked2;
      }
    } else {
      this.checked2 = !this.checked2;
      if (this.checked1) {
        this.checked1 = !this.checked1;
      }
    }
  }
  public getMidleScoreFilm(film: Film): number {
    if (film.scores?.length === 0) {
      return 0;
    }
    let sum: number = 0;
    film.scores?.forEach(score => sum += +score);
    return sum / film.scores?.length;
  }
}
