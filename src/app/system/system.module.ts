import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { SystemRoutingModule } from "./system-routing.module";
import { SystemComponent } from './system/system.component';
import { ProguctsPageComponent } from './progucts-page/progucts-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { ProductsReviewComponent } from './products-review/products-review.component';
import { RouterLink, RouterModule } from "@angular/router";
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Dropdown } from "./shared/directives/dropdown.directive";

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
      Dropdown
    ]
})
export class SystemModule{}
