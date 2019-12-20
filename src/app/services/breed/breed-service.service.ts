import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BreedService {
  urlAll = environment.apiUrlAll;
  apiUrl = environment.apiUrl;
  breedUrl: string;
  constructor(private http: HttpClient) {}
  public getBreedInfo(): Observable<any> {
    return this.http.get("../../../assets/breed.json");
  }
  getRandomImg(name) {
    return this.http.get(`https://dog.ceo/api/breed/${name}/images/random`);
  }
  getBreedList() {
    return this.http.get(this.urlAll);
  }
  getSelectedBreed(breed: string) {
    const breedpicked = breed.trim().split(" ");
    localStorage.setItem("breed", breedpicked[0]);
    return breedpicked.length > 1
      ? this.http.get(
          `${this.apiUrl}/${breedpicked[0]}/${breedpicked[1]}/images/random`
        )
      : this.http.get(`${this.apiUrl}/${breedpicked[0]}/images/random`);
  }
}
