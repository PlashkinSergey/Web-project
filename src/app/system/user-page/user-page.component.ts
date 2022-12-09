import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import { User } from 'src/app/shared/models/user.model';
import { Film } from '../shared/models/films.models';
import {FilmService} from "../shared/services/film.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  constructor(
    private filmService: FilmService,
    private router: Router
  ) { }
  films$!: Observable<Film[]>;
  public getMidleScoreFilm(film: Film): number {
    if (film.scores?.length === 0) {
      return 0;
    }
    let sum: number = 0;
    film.scores?.forEach(score => sum += +score);
    return sum / film.scores?.length;
  }
  ngOnInit(): void {
    const user: User = JSON.parse(window.sessionStorage.getItem('user')!)
    this.films$ = this.filmService.getFilmsUser(user);
  }

}
