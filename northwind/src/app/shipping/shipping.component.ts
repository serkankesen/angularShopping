import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Shipping } from "./shipping";
import { NotificationsService } from "angular2-notifications";
import { CartService } from "../cart/cart.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private notificationService: NotificationsService,
    private router: Router
  ) {}
  cities = [];
  model: Shipping = new Shipping("", "", true, -1);
  ngOnInit() {
    this.cities.push(
      {
        id: "1",
        name: "Ankara"
      },
      { id: "2", name: "İstanbul" },
      {
        id: "3",
        name: "Samsun"
      }
    );
  }

  checkOut(form:NgForm) {
    if (form.invalid) {
      return;
    }
    this.cartService.clear();
    this.notificationService.info("Successfull", "Shopping completed!");
    this.router.navigate(["products"]);
  }
}
