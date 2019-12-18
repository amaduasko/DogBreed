import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BreedService } from "../../../../services/breed/breed-service.service";
@Component({
  selector: "select-box",
  templateUrl: "./select-box.component.html",
  styleUrls: ["./select-box.component.scss"]
})
export class SelectBoxComponent implements OnInit {
  name = "affenpinscher";
  breedList: string[] = [];
  breedImg: string;
  isSelectType = true;
  form = new FormGroup({
    list: new FormControl("affenpinscher"),
    breedName: new FormControl("")
  });

  constructor(private service: BreedService) {}
  toggleMode() {
    this.isSelectType = !this.isSelectType;
  }
  getRandomBreedImg(): void {
    this.service.getRandomImg().subscribe((data: any) => {
      this.service.breedFound = data.message;
      this.breedImg = data.message;
    });
  }
  lookForBreed(): void {
    const breed: string = this.isSelectType
      ? this.form.controls.list.value
      : this.form.controls.breedName.value;
    this.name = breed.trim();
    this.service.getSelectedBreed(breed).subscribe((data: any) => {
      this.service.breedFound = data.message;
      this.breedImg = data.message;
    });
  }
  ngOnInit() {
    this.getRandomBreedImg();
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
