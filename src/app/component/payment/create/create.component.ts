import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PaymentEntities } from "../../payment-entities";
import { PaymentServiceService } from "../../payment-service.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  pay: PaymentEntities = {
    name: "",
    username: "",
    date: "",
    value: null,
    title: "",
  };

  constructor(
    private paymentService: PaymentServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createPayment(): void {
    if (this.pay) {
      this.paymentService.create(this.pay).subscribe(() => {
        this.paymentService.showMensage("Pagamento adicionado com sucesso!", [
          "msg-success",
        ]);
        this.router.navigate(["/extract"]);
      });
    }
  }

  cancelPayment(): void {
    this.paymentService.showMensage("Pagamento cancelado!", ["msg-danger"]);
    this.router.navigate(["/extract"]);
  }
}
