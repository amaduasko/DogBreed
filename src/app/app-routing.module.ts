import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeContainer } from "./modules/home/container/home-container.component";

const routes: Routes = [
  { path: "", component: HomeContainer },
  {
    path: "breed",
    loadChildren: () =>
      import("./modules/view-box/view-box.module").then(m => m.ViewBoxModule)
  },
  {
    path: "**",
    loadChildren: () =>
      import("./modules/pagenotfound/pagenotfound.module").then(
        m => m.PagenotfoundModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
