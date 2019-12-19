import { Component, OnInit } from "@angular/core";
import { BreedService } from "../../services/breed/breed-service.service";
@Component({
  selector: "app-view-box",
  templateUrl: "./view-box.component.html",
  styleUrls: ["./view-box.component.scss"]
})
export class ViewBoxComponent implements OnInit {
  imgUrl: string;
  constructor(private service: BreedService) {
    this.imgUrl = this.service.breedFound;
  }

  ngOnInit() {}
}
