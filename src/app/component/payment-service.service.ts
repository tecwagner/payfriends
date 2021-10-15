import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { PaymentEntities } from "./payment-entities";
import { catchError, map } from "rxjs/operators";
import { Page } from "../util/pagination";
import { QueryBuilder } from "../util/pagination-entities";

@Injectable({
  providedIn: "root",
})
export class PaymentServiceService {
  private baseUrl = environment.apiTasks;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMensage(
    msg: string,
    isMsg: ["msg-success" | "msg-danger" | "msg-warn"]
  ): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isMsg,
    });
  }

  create(pay: PaymentEntities): Observable<PaymentEntities> {
    const url = `${this.baseUrl}tasks`;
    return this.http.post<PaymentEntities>(url, pay).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(queryBuilder: QueryBuilder): Observable<Page<PaymentEntities[]>> {
    const url = `${this.baseUrl}tasks?${queryBuilder.buildQueryString()}`;

    return this.http.get<PaymentEntities[]>(url, { observe: "response" }).pipe(
      map((obj) => <Page<PaymentEntities>>Page.fromResponse(obj)),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<PaymentEntities> {
    const url = `${this.baseUrl}tasks/${id}`;
    return this.http.get<PaymentEntities>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(pay: PaymentEntities): Observable<PaymentEntities> {
    const url = `${this.baseUrl}tasks/${pay.id}`;
    return this.http.put<PaymentEntities>(url, pay).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<PaymentEntities> {
    const url = `${this.baseUrl}tasks/${id}`;
    return this.http.delete<PaymentEntities>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMensage("Ocorreu um erro!", ["msg-warn"]);
    return EMPTY;
  }
}
