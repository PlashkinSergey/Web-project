import { Pipe, PipeTransform } from '@angular/core';
import { Film } from '../models/films.models';

@Pipe({
  name: 'filterFilms'
})
export class FilterFilmsPipe implements PipeTransform {
  transform(films: Film[], searche: string): Film[] {
    return searche !== "" ? films.filter(film => film.type?.toLowerCase().includes(searche?.toLowerCase())) : films;
  }
}
