import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewBoxComponent } from "./container/view-box.component";

const routes: Routes = [{ path: ":name", component: ViewBoxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewBoxRoutingModule {}
