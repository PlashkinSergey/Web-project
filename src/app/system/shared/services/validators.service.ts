import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {FilmService} from "./film.service";

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  limiteScore(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject)=> {
      const score: number = +control.value;
      if (score < 0 || score > 5) {
        resolve({limitedScore: true});
      } else {
        resolve(null);
      }
    })
  }
  zeroScore(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject)=> {
      if (control.value?.split('.').length >= 2) {
        resolve({zeroScore: true});
      } else {
        resolve(null);
      }
    })
  }
  lengthReview(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject)=> {
      const review: string  = control.value;
      if (review.length > 100) {
        resolve({ lengthReview: true });
      } else {
        resolve(null);
      }
    })
  }
  minLengthReview(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject)=> {
      const review: string  = control.value;
      if (review.length < 10) {
        resolve({ minLengthReview: true });
      } else {
        resolve(null);
      }
    })
  }
  correctScoreInput(constrol: AbstractControl): Promise<any> {
    return new Promise((resolve, reject)=> {
      const score: number = +constrol.value;
      if(isNaN(score)) {
        resolve({
          correctScoreInput: true
        })
      } else {
        resolve(null);
      }
    })
  }
  CorrectPatternName(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject)=> {
      let name: string = control.value;
      name = name.replace('(','.');
      name = name.replace(')','.');
      const nameFilm: string[] = name.split('.');
      console.log(nameFilm);
      if (nameFilm.length != 3 || nameFilm[1] === "" || isNaN(+nameFilm[1]) || nameFilm[1].length !== 4 ) {
        resolve({CorrectPatternName: true});
      } else {
        resolve(null);
      }
    })
  }
}
