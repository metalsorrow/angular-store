import { 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    // DoCheck,
    OnInit, 
    SimpleChanges, 
    OnDestroy, 
    OnChanges
} from "@angular/core";

import { Product } from "src/models/product.model";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
// export class ProductComponent implements OnChanges, OnInit {
export class ProductComponent implements OnInit, OnChanges, OnDestroy {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();


    today = new Date();

    constructor(){
        this.product = {};
        console.log('constructor');

    }
    

    ngOnChanges(changes: SimpleChanges){
        // Deteccion Automatica de cambios
        console.log('ngOnChange');
        console.log(changes);
    }

    ngOnInit(){
        console.log('ngOnInit');
    }

    // ngDoCheck(){
    //     // Detecciona manual de cambios
    //     console.log('doCheck');
    // }

    ngOnDestroy(){
        console.log('onDestroy');
    }

    addCart(){
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id)
    }
    // product = {
    //     id: '1',
    //     image: 'assets/images/camiseta.png',
    //     title: 'Camiseta',
    //     price: 80000,
    //     description: 'bla bla bla bla'
    // }
}