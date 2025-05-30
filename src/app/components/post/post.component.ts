import {Component, Input, signal} from '@angular/core';
import {PostModel} from "../../models/post.model";
import {IonicModule} from "@ionic/angular";
import {ShortingPipe} from "../../pipes/shorting.pipe";
import {ReadMoreDirective} from "../../directive/read-more.directive";
import {CommonModule} from "@angular/common";
import {ActionSheetComponent} from "../action-sheet/action-sheet.component";
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  imports: [IonicModule, ShortingPipe, CommonModule, ReadMoreDirective, ActionSheetComponent],
})
export class PostComponent   {
  liked!:boolean;
  @Input()post!:PostModel;

  constructor() { }

  toggleLike() {
    this.liked = !this.liked;
  }

}
