import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Component
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./component/template/header/header.component";
import { NavComponent } from "./component/template/nav/nav.component";
import { CreateComponent } from "./component/payment/create/create.component";

//Page
import { HomeComponent } from "./views/home/home.component";
import { PaymentsCrudComponent } from "./views/payments-crud/payments-crud.component";

// Lib Material
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReadComponent } from "./component/payment/read/read.component";
import { MatTableModule } from "@angular/material/table";
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { UpdateComponent } from "./component/payment/update/update.component";
import { DeleteComponent } from "./component/payment/delete/delete.component";
import { MatPaginatorIntlPtBr } from "./util/paginator-ptbr-i8n";
import { NgxMaskModule } from "ngx-mask";
import { MatNativeDateModule } from "@angular/material/core";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    PaymentsCrudComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NgxMaskModule.forRoot({ dropSpecialCharacters: false }),
    MatNativeDateModule,
    MatCheckboxModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorIntlPtBr,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
