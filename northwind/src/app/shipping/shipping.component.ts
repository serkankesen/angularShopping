import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Shipping } from "./shipping";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent implements OnInit {
  constructor() {}
  cities = [];
  model:Shipping= new Shipping("","",true,-1)
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

  checkOut(form:NgForm){
    
  }
}
