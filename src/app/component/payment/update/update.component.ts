import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PaymentEntities } from "../../payment-entities";
import { PaymentServiceService } from "../../payment-service.service";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss"],
})
export class UpdateComponent implements OnInit {
  pay: PaymentEntities;

  constructor(
    private paymentService: PaymentServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.paymentService.readById(id).subscribe((pay) => {
      this.pay = pay;
    });
  }

  updatePayment(): void {
    this.paymentService.update(this.pay).subscribe(() => {
      this.paymentService.showMensage("Dados alterado com sucesso!", [
        "msg-success",
      ]);
      this.router.navigate(["/extract"]);
    });
  }

  cancelPayment(): void {
    this.paymentService.showMensage("Edição de pagamento cancelado!", [
      "msg-danger",
    ]);
    this.router.navigate(["/extract"]);
  }
}
