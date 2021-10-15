import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PaymentEntities } from "../../payment-entities";
import { PaymentServiceService } from "../../payment-service.service";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss"],
})
export class DeleteComponent implements OnInit {
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

  deletePayment(): void {
    this.paymentService.delete(this.pay.id).subscribe(() => {
      this.paymentService.showMensage("Pagamento excluido com sucesso!", [
        "msg-success",
      ]);
      this.router.navigate(["/extract"]);
    });
  }

  cancelPayment(): void {
    this.paymentService.showMensage("Exclusão de pagamento cancelado!", [
      "msg-danger",
    ]);
    this.router.navigate(["/extract"]);
  }
}
