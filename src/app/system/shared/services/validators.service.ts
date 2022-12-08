import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }
  limiteScore(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject)=> {
      const score: number = +control.value;
      console.log(score);
      if (score < 0 || score > 5) {
        resolve({limitedScore: true});
      } else {
        resolve(null);
      }
    })
  }
  lengthReview(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject)=> {
      const review: string  = control.value;
      if (review.length > 10) {
        resolve({lengthReview: true});
      } else {
        resolve(null);
      }
    })
  }
}
