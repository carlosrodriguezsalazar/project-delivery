import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../products.service';
import Product from '../global/models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: Product[];
  filterSearchCustomer: string;
  p = 1;
  total = 0;

  // Pagination
  public config: any = {
    itemsPerPage: 8,
    totalItems: this.products,
    currentPage: this.p,
    directionLinks: true,
    autoHide: false,
    responsive: true,
    previousLabel: 'Previo',
    nextLabel: 'Siguiente'
  };

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.getProductList();
    console.log(this.total);
  }

  getProductList() {
    this.productService.getItemsByPagination(this.p.toString(), this.config.itemsPerPage.toString()).subscribe(
      response => {
        this.products = response.items.content;
        //this.products = this.products.filter(l => l.quantity > 0);
        this.products.forEach(l => l.imageName === '' || l.imageName === undefined ? l.imageName = 'nodisp.png' : l.imageName);
        this.config.totalItems = response.totalItems;

        console.log(this.total);
        console.log(this.products);
      }
    );
  }

  // Pagination
  pageChanged(numberP: number) {
    this.config.currentPage = numberP;
    this.p = numberP - 1;
    this.getProductList();
  }


}
