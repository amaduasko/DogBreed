import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./container/app.component";
import { HomeComponent } from "./components/home/home.component";
import { ViewBoxComponent } from "./components/view-box/view-box.component";
import { PageNotFoundComponent } from "./components/pagenotfound/page-not-found.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewBoxComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
