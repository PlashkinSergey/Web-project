import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProguctsPageComponent } from './progucts-page.component';

describe('ProguctsPageComponent', () => {
  let component: ProguctsPageComponent;
  let fixture: ComponentFixture<ProguctsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProguctsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProguctsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
