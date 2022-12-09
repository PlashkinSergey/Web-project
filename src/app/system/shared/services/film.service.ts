import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { Film } from "../models/films.models";
import { map } from "rxjs/operators";
import { User } from "../../../shared/models/user.model";

@Injectable()
export class FilmService {
    constructor(private http: HttpClient) {}
    getFilms(): Observable<Film[]> {
        return this.http.get<Film[]>('http://localhost:3000/films').pipe(
            map((film: Film[]) => film)
        )
    }
    getFilmsUser(user: User): Observable<Film[]> {
      return this.http.get<Film[]>(`http://localhost:3000/films?user_id=${user.id}`).pipe(
        map((films: Film[]) => films)
      )
    }
    createFilm(film: Film): Observable<Film> {
      return this.http.post<Film>('http://localhost:3000/films', film);
    }
    getFilm(name: string): Observable<Film | undefined> {
      return this.http.get<Film[]>(`http://localhost:3000/films?name=${name}`).pipe(
        map((films: Film[]) => films[0] ? films[0] : undefined)
      )
   }
   updateFilm(film: Film): Observable<Film> {
      return this.http.put<Film>(`http://localhost:3000/films/${film.id}`, film);
   }
   getScoreFilm(film: Film, score: string, review: string): Film {
      film.review = review;
      film.scores.push(score);
      return film;
   }
   deleteProduct(film: Film): Observable<Film> {
      return this.http.delete<Film>(`http://localhost:3000/films/${film.id}`);
   }
}
