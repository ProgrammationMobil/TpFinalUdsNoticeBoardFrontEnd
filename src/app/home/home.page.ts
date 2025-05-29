import {Component, inject, Input, OnInit, signal} from '@angular/core';
import {Router} from '@angular/router';
import {PostService} from "../services/post.service";
import {PostModel} from "../models/post.model";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,

})
export class HomePage implements OnInit {
  Posts = signal<PostModel[]>([]);
  postService = inject(PostService)
  constructor() {}

  ngOnInit() {
    this.Posts.set(this.postService.getPostList())
  }
}
