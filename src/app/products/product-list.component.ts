import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls : ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

    pageTitle: string = "Product List";
    showImage: boolean = false;
    filteredProducts: IProduct[];
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[] = [
        {
            productId: 1,
            productName: "Desktop",
            productCode: "HP-4100",
            productReleaseDate: "08-08-2018",
            productPrice: 38000,
            productDescription: "This is a Desktop",
            productRating: 4.5,
            imageUrl: '../../assets/images/css.png'
        },
        {
            productId: 5,
            productName: "Laptop",
            productCode: "HP-4200",
            productReleaseDate: "04-08-2018",
            productPrice: 35000,
            productDescription: "This is a Laptop",
            productRating: 4.5,
            imageUrl: '../../assets/images/css.png'
        }
    ];

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'lap';
    }

    performFilter(filterBy: string) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleData() {
        this.showImage = !this.showImage;
    }

    ngOnInit() {
        console.log('In OnInit');
    }

    OnRatingClicked(message: string) : void {
        
    }
    
}