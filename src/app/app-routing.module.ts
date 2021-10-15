import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { PaymentsCrudComponent } from "./views/payments-crud/payments-crud.component";
import { CreateComponent } from "./component/payment/create/create.component";
import { UpdateComponent } from "./component/payment/update/update.component";
import { DeleteComponent } from "./component/payment/delete/delete.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "extract",
    component: PaymentsCrudComponent,
  },
  {
    path: "extract/create",
    component: CreateComponent,
  },
  {
    path: "extract/update/:id",
    component: UpdateComponent,
  },
  {
    path: "extract/delete/:id",
    component: DeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
