import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BreedService } from "../../services/breed/breed-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  name: string = localStorage.length
    ? localStorage.getItem("breed")
    : "affenpinscher";
  breedList: string[] = [];
  breedImg: string;
  isSelectType = true;
  form = new FormGroup({
    list: new FormControl(this.name),
    breedName: new FormControl("")
  });

  constructor(private service: BreedService) {}
  toggleMode() {
    this.isSelectType = !this.isSelectType;
  }
  getRandomOrActualBreedImg(): void {
    localStorage.getItem("breedUrl")
      ? (this.breedImg = localStorage.getItem("breedUrl"))
      : this.service.getRandomImg(this.name).subscribe((data: any) => {
          localStorage.setItem("breedUrl", data.message);
          this.breedImg = data.message;
        });
  }
  lookForBreed(): void {
    const breed: string = this.isSelectType
      ? this.form.controls.list.value
      : this.form.controls.breedName.value;
    this.name = breed.trim();
    this.service.getSelectedBreed(breed).subscribe((data: any) => {
      localStorage.setItem("breedUrl", data.message);
      this.breedImg = data.message;
    });
  }
  ngOnInit() {
    this.getRandomOrActualBreedImg();
    this.service.getBreedList().subscribe((data: any) => {
      for (let key in data.message) {
        const value = data.message[key];
        if (value && value.length)
          value.forEach((item: string) =>
            this.breedList.push(key + " " + item)
          );
        this.breedList.push(key);
      }
    });
  }
}
