import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsReviewComponent } from './products-review/products-review.component';
import { ProguctsPageComponent } from './progucts-page/progucts-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { SystemComponent } from './system/system.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {
    path: "system", component: SystemComponent, children: [
        { path: "products", component: ProguctsPageComponent },
        { path: "user", component: UserPageComponent },
        { path: "review", component: ReviewPageComponent },
        { path: "proguctreview", component: ProductsReviewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
