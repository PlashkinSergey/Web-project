import { Component, OnInit } from '@angular/core';
import {Message} from "../../shared/models/message.model";
import { AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../shared/services/film.service";
import {Film} from "../shared/models/films.models";
import {ActivatedRoute, Params, Router} from "@angular/router";
import { ValidatorsService } from '../shared/services/validators.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  form!: FormGroup;
  message!: Message;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private validatorsService: ValidatorsService
  ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      "name": new FormControl('', [Validators.required]),
      "type": new FormControl('',[Validators.required]),
      "score": new FormControl('',
        [
          Validators.required
        ], 
          this.validatorsService.limiteScore.bind(this) 
        ),
      "review": new FormControl('',[Validators.required], this.validatorsService.lengthReview.bind(this))
    })
  }
  showMessange(message: Message): void {
    this.message = message;
    window.setTimeout(()=>{
      this.message.text = '';
    }, 5000)
  }
  onSubmit(): void {
    const formData = this.form.value;
    this.productService.getFilm(formData.name).subscribe((film: Film | undefined)=>{
      if (film) {
        if (film.type === formData.type) {
          film = this.productService.getScoreFilm(film, formData.score, formData.review);
          this.productService.updateFilm(film).subscribe();
        } else {
          this.showMessange(new Message("Неверный тип продукта", "danger"));
        }
      } else {
        this.showMessange(new Message("Продукта с таким названием нет","danger"))
      }
    })
  }

}
