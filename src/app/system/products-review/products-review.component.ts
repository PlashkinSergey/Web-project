import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../shared/services/film.service';
import { Film } from "../shared/models/films.models";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-products-review',
  templateUrl: './products-review.component.html',
  styleUrls: ['./products-review.component.css']
})
export class ProductsReviewComponent implements OnInit {
  user: User = JSON.parse(window.sessionStorage.getItem('user')!);
  form!: FormGroup
  constructor(
    private productService: FilmService
  ) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      "name": new FormControl('', [Validators.required]),
      "type": new FormControl('',[Validators.required])
    })
  }
  onSubmit(): void {
    const formData = this.form.value;
    const film: Film = new Film(formData.name, formData.type, this.user.id!);
    this.productService.createFilm(film).subscribe();
  }
}
