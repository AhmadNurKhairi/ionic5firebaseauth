import { Component, OnInit } from "@angular/core";
import { RestService } from "../services/rest.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.page.html",
  styleUrls: ["./posts.page.scss"]
})
export class PostsPage implements OnInit {
  posts: any;

  constructor(public restService: RestService) {
    this.getPosts();
  }

  ngOnInit() {}

  getPosts() {
    this.restService.getPosts().then(data => {
      this.posts = data;
      console.log(this.posts);
    });
  }
}
