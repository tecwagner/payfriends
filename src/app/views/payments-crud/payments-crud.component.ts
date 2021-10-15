import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-payments-crud",
  templateUrl: "./payments-crud.component.html",
  styleUrls: ["./payments-crud.component.scss"],
})
export class PaymentsCrudComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  createExtract(): void {
    this.router.navigate(["/extract/create"]);
  }
}
