import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {IonMenuComponent} from "../ion-menu/ion-menu.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonicModule,
    IonMenuComponent
  ]
})
export class HeaderComponent   {

  constructor() { }



}
