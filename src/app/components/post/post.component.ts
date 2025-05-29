import {Component, Input, signal} from '@angular/core';
import {PostModel} from "../../models/post.model";
import {IonicModule} from "@ionic/angular";
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  imports:[IonicModule]
})
export class PostComponent   {

  @Input()post!:PostModel;
  constructor() { }



}
