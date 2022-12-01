import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsReviewComponent } from './products-review.component';

describe('ProductsReviewComponent', () => {
  let component: ProductsReviewComponent;
  let fixture: ComponentFixture<ProductsReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
