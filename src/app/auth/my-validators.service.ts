import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MyValidatorsService {
  constructor() { }
  CorrectPatternEmail(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject)=> {
      const email: string = control.value;
      let pattern: RegExp = new RegExp('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}');
      const valid: boolean = pattern.test(email);
      if (!valid) {
        resolve({CorrectPatternEmail: true});
      } else {
        resolve(null);
      }
    })
  }
  dogInEmail(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject)=> {
      const email: string = control.value;
      console.log(email);
      if (!email.includes('@')) {
        resolve({dogInEmail: true})
      } else {
        resolve(null);
      }
    })
  }
}
