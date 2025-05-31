import { Component, OnInit } from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
  imports: [
    IonicModule
  ]
})
export class NotificationListComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
