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
  imports: [IonicModule, CommonModule, ReadMoreDirective, ],
})
export class PostComponent   {
  liked:boolean = false ;
  @Input()post!:PostModel;
  constructor() { }

  toggleLike() {

    if (!this.liked) {
      this.post.like++;
      this.liked = true;
    }else {
      this.post.like--;
      this.liked = false;
    }
  }


  protected readonly menubar = menubar;
}
