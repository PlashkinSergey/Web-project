import { Pipe, PipeTransform } from '@angular/core';
import { Film } from '../models/films.models';

@Pipe({
  name: 'sortFilms'
})
export class SortFilmsPipe implements PipeTransform {
  transform(films: Film[], type: number): Film[] {
    if (type === 1) {
      let i: number = films.length - 1;
      while (i > 0) {
        let lastIndex: number = 0;
        for (let j: number = 0; j < i; ++j) {
          if (this.getMiddleScore(films[j].scores) > this.getMiddleScore(films[j + 1].scores)) {
            let tmp: Film = films[j];
            films[j] = films[j + 1];
            films[j + 1] = tmp;
            lastIndex = j;
          }
        }
        i = lastIndex;
      }
    } else {
      let i: number = films.length - 1;
      while (i > 0) {
        let lastIndex: number = 0;
        for (let j: number = 0; j < i; ++j) {
          if (this.getMiddleScore(films[j].scores) < this.getMiddleScore(films[j + 1].scores)) {
            let tmp: Film = films[j];
            films[j] = films[j + 1];
            films[j + 1] = tmp;
            lastIndex = j;
          }
        }
        i = lastIndex;
      }
    }
    return films;
  }
  private getMiddleScore(scores: string[]): number {
    let sum: number = 0;
    if (scores.length === 0) {
      return 0;
    }
    scores.forEach(score=> sum += +score);
    return sum / scores.length;
  }
}
