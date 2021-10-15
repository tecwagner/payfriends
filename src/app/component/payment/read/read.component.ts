import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { PageEvent } from "@angular/material/paginator";
import { take } from "rxjs/operators";
import { Page, PageRequest } from "src/app/util/pagination";
import { PaymentEntities } from "../../payment-entities";
import { PaymentServiceService } from "../../payment-service.service";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.scss"],
})
export class ReadComponent implements OnInit {
  page: Page<PaymentEntities[]>;
  pay: PaymentEntities;
  pageEvent: PageEvent;
  displayedColumns = [
    "username",
    "title",
    "date",
    "value",
    "isPayed",
    "action",
  ];

  formGroupSearch: FormGroup;

  constructor(
    private paymentService: PaymentServiceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroupSearch = this.formBuilder.group({
      name: [null],
    });
    this.readItens();
  }

  readItens() {
    const queryAdicional = new Map();
    if (this.formGroupSearch.value.name) {
      queryAdicional.set("name_like", this.formGroupSearch.value.name);
    }
    this.paymentService
      .read(
        new PageRequest(
          {
            pageNumber: this.pageEvent ? this.pageEvent.pageIndex : 0,
            pageSize: this.pageEvent ? this.pageEvent.pageSize : 5,
          },
          queryAdicional
        )
      )
      .pipe(take(1))
      .subscribe(
        (page) => {
          this.page = page;
        },
        (error) => {
          this.page = new Page([], 0);
        }
      );
  }
}
