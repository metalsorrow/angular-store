import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { DemoComponent } from "./components/demo/demo.component";
import { DemoRoutingModule } from "./demo-routing.module";

@NgModule({
    declarations:[
        DemoComponent
    ],
    imports:[
        DemoRoutingModule,
        SharedModule,
        CommonModule,
        FormsModule
    ]
})

export class DemoModule{}