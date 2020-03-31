import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RestService {
  apiUrl = "http://128.199.129.234";

  constructor(public http: HttpClient) {}

  getPosts() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + "/posts").subscribe(
        data => {
          resolve(data);
        },
        err => {
          console.log(err);
        }
      );
    });
  }
}
