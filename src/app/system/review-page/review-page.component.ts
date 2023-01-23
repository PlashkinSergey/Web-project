import { Component, OnInit } from '@angular/core';
import {Message} from "../../shared/models/message.model";
import { AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import { FilmService } from "../shared/services/film.service";
import { Film } from "../shared/models/films.models";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ValidatorsService } from '../shared/services/validators.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  form!: FormGroup;
  films$!: Observable<Film[]>;
  message!: Message;
  constructor(
    private productService: FilmService,
    private validatorsService: ValidatorsService,
    private router: Router
  ) { }
  currentId: number = 1;
  currentFilm?: Film;
  ngOnInit(): void {
    this.films$ = this.productService.getFilms();
    this.onChange();
    this.form = new FormGroup({
      "name": new FormControl(''),
      "type": new FormControl('',[Validators.required]),
      "score": new FormControl('',
          Validators.required,
        [
          this.validatorsService.limiteScore.bind(this),
          this.validatorsService.correctScoreInput.bind(this),
          this.validatorsService.zeroScore.bind(this)
        ]
      ),
      "review": new FormControl('',
        Validators.required,
        [
          this.validatorsService.lengthReview.bind(this),
          this.validatorsService.minLengthReview.bind(this)
        ]
      )
    })
  }
  showMessange(message: Message): void {
    this.message = message;
    window.setTimeout(()=>{
      this.message.text = '';
    }, 5000)
  }
  onChange(): void {
    this.films$.subscribe((films: Film[])=> {
      this.currentFilm = films.find(f => f.id === +this.currentId);
    })
  }
  onSubmit(): void {
    const formData = this.form.value;
    this.productService.getFilmById(this.currentId).subscribe((film: Film | undefined)=>{
      if (film) {
        if (film.type === formData.type) {
          film = this.productService.getScoreFilm(film, formData.score, formData.review);
          this.productService.updateFilm(film).subscribe(()=>{
            this.router.navigate(["", '/products'])
          });
        } else {
          this.showMessange(new Message("Неверный тип продукта", "danger"));
        }
      } else {
        this.showMessange(new Message("Продукта с таким названием нет","danger"))
      }
    })
  }
}
