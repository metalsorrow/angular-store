import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { BannerComponent } from "./components/banner/banner.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        SharedModule
    ]
})

export class HomeModule {

}
