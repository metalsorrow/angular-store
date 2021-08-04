import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductComponent } from "./components/product/product.components";
import { ProductsComponent } from "./components/products/products.component";
import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
    declarations: [
        ProductComponent,
        ProductsComponent,
        ProductDetailComponent
    ],
    imports: [
        ProductsRoutingModule,
        CommonModule,
        SharedModule
    ],
})


export class ProductsModules {}