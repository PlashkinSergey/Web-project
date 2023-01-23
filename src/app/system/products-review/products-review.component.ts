import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { FilmService } from '../shared/services/film.service';
import { Film } from "../shared/models/films.models";
import { User } from "../../shared/models/user.model";
import { Router } from '@angular/router';
import { Message } from "../../shared/models/message.model";
import { ValidatorsService } from "../shared/services/validators.service";

@Component({
  selector: 'app-products-review',
  templateUrl: './products-review.component.html',
  styleUrls: ['./products-review.component.css']
})
export class ProductsReviewComponent implements OnInit {
  user: User = JSON.parse(window.sessionStorage.getItem('user')!);
  form!: FormGroup;
  messange!: Message;
  constructor(
    private router: Router,
    private productService: FilmService,
    private validators: ValidatorsService
  ) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      "name": new FormControl('', [Validators.required], [
          this.validators.CorrectPatternName.bind(this),
          this.forbiddenNameFilm.bind(this)
        ]
      ),
      "type": new FormControl('',[Validators.required])
    })
  }
  onSubmit(): void {
    const formData = this.form.value;
    const film: Film = new Film(formData.name, formData.type, this.user.id!);
    this.productService.createFilm(film).subscribe();
    this.router.navigate(['/system', 'products']);
  }

  forbiddenNameFilm(control: AbstractControl):Promise<any> {
    return new Promise((resolve, reject)=>{
      this.productService.getFilmByName(control.value).subscribe((film:Film | undefined)=>{
        if (film) {
          resolve({forbiddenNameFilm: true})
        } else {
          resolve(null);
        }
      })
    })
  }
}
