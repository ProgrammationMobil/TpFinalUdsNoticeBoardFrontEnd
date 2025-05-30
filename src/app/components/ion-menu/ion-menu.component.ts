import {Component, inject, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {AuthService} from "../../auth/services/auth.service";
import {Router, RouterLink} from "@angular/router";
@Component({
  selector: 'app-ion-menu',
  templateUrl: './ion-menu.component.html',
  styleUrls: ['./ion-menu.component.scss'],
  imports: [
    IonicModule,
  ]
})
export class IonMenuComponent  implements OnInit {
  username! : String;
  private authService = inject(AuthService)
  private router = inject(Router)
  constructor() { }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login').then(r => true);
  }

  regirect() {
    this.router.navigateByUrl('/post').then(r => true);
  }

  ngOnInit() {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.username = user.username;
    } else {
    }
  }
}
