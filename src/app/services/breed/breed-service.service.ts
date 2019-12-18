import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BreedService {
  url = "https://dog.ceo/api/breeds/list/all";
  breedFound: string;
  constructor(private http: HttpClient) {}
  getRandomImg() {
    return this.http.get(
      "https://dog.ceo/api/breed/affenpinscher/images/random"
    );
  }
  getBreedList() {
    return this.http.get(this.url);
  }
  getSelectedBreed(breed: string) {
    const breedpicked = breed.trim().split(" ");
    return breedpicked.length > 1
      ? this.http.get(
          `https://dog.ceo/api/breed/${breedpicked[0]}/${breedpicked[1]}/images/random`
        )
      : this.http.get(
          `https://dog.ceo/api/breed/${breedpicked[0]}/images/random`
        );
  }
  getbreedFound() {
    return this.breedFound;
  }
}
