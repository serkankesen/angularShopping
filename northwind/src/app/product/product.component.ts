import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
// import {ProductList} from './product-list.mock'
import { ProductService } from "./product.service";
import { NotificationsService } from "angular2-notifications";
import { CartService } from "../cart/cart.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  products: Product[];
  addedProduct: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private notificationsService: NotificationsService,
    private cartService: CartService
  ) {
    // this.products = ProductList;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getProducts(params["seoUrl"]);
    });
  }

  getProducts(seoCategory: string) {
    this.productService.getProducts(seoCategory).subscribe(p => {
      this.products = p;
    });
  }

  addToCart(product: Product) {
    this.addedProduct = product.productName;
    this.cartService.addToCart(product);
    this.notificationsService.success(
      "Successfull ",
      product.productName,
      " added to cart!"
    );
  }
}
