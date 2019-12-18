import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HomeContainer } from "./container/home-container.component";
import { HeaderComponent } from "./components/header/header.component";
import { SelectBoxComponent } from "./components/select-box/select-box.component";
@NgModule({
  declarations: [HomeContainer, HeaderComponent, SelectBoxComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule]
})
export class HomeModule {}
