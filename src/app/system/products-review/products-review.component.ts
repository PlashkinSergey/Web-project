import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../shared/services/film.service';
import { Film } from "../shared/models/films.models";

@Component({
  selector: 'app-products-review',
  templateUrl: './products-review.component.html',
  styleUrls: ['./products-review.component.css']
})
export class ProductsReviewComponent implements OnInit {
  form!: FormGroup
  constructor(
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      "name": new FormControl('', [Validators.required]),
      "type": new FormControl('',[Validators.required])
    })
  }
  onSubmit(): void {
    const formData = this.form.value;
    const film: Film = new Film(formData.name, formData.type);
    this.productService.createFilm(film).subscribe();
  }
}