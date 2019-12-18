import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViewBoxComponent } from "./container/view-box.component";
import { ViewBoxRoutingModule } from "./view-box.routing";

@NgModule({
  declarations: [ViewBoxComponent],
  imports: [CommonModule, ViewBoxRoutingModule]
})
export class ViewBoxModule {}
