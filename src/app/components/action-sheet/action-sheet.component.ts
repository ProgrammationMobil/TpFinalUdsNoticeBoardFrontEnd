import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.component.html',
  styleUrls: ['./action-sheet.component.scss'],
  imports: [
    IonicModule
  ]
})
export class ActionSheetComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
    public actionSheetButtons = [
      {
        text: 'Delete',
        role: 'destructive',
        data: {
          action: 'delete',
        },
      },
      {
        text: 'Share',
        data: {
          action: 'share',
        },
      },
      {
        text: 'Cancel',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ];
}
