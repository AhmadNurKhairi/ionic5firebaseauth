import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/user/auth.service";
import { LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
  public loading: HTMLIonLoadingElement;
  constructor(
    private authService: AuthService,
    public loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {}

  async logoutUser(): Promise<void> {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
    this.authService.logoutUser().then(() => {
      this.loading.dismiss().then(() => {
        this.router.navigateByUrl("login");
      });
    });
  }

  posts() {
    this.router.navigateByUrl("posts");
  }
}
