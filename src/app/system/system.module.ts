import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { SystemRoutingModule } from "./system-routing.module";
import { SystemComponent } from './system/system.component';
import { ProguctsPageComponent } from './progucts-page/progucts-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { ProductsReviewComponent } from './products-review/products-review.component';
import { RouterLink } from "@angular/router";
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Dropdown } from "./shared/directives/dropdown.directive";
import { FilterFilmsPipe } from './shared/pipes/filter-films.pipe';
import { SortFilmsPipe } from './shared/pipes/sort-films.pipe';
import { ValidatorsService } from "./shared/services/validators.service";

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      SystemRoutingModule,
      RouterLink
    ],
    declarations: [
      SystemComponent,
      ProguctsPageComponent,
      UserPageComponent,
      ReviewPageComponent,
      ProductsReviewComponent,
      SideBarComponent,
      HeaderComponent,
      FooterComponent,
      Dropdown,
      FilterFilmsPipe,
      SortFilmsPipe
    ],
    providers: [
      ValidatorsService
    ]
})
export class SystemModule{}
