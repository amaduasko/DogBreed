import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class BreedService {
  apiUrl = environment.apiUrl;
  breedUrl: string;
  constructor(private http: HttpClient) {}
  getRandomImg(name) {
    return this.http.get(`${this.apiUrl}/breed/${name}/images/random`);
  }
  getBreedList() {
    return this.http.get(`${this.apiUrl}/breeds/list/all`);
  }
  getSelectedBreed(breed: string) {
    const breedpicked = breed.trim().split(" ");
    localStorage.setItem("breed", breedpicked[0]);
    return breedpicked.length > 1
      ? this.http.get(
          `${this.apiUrl}/breed/${breedpicked[0]}/${breedpicked[1]}/images/random`
        )
      : this.http.get(`${this.apiUrl}/breed/${breedpicked[0]}/images/random`);
  }
}
