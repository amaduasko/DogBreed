import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageNotFoundComponent } from "./container/page-not-found.component";
import { PageNotFoundRoutingModule } from "./pagenotfound.routing";
@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, PageNotFoundRoutingModule]
})
export class PagenotfoundModule {}
