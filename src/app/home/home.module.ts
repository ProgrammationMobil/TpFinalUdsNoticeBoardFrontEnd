import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {HeaderComponent} from "../components/header/header.component";
import {PostComponent} from "../components/post/post.component";
import {ActionSheetComponent} from "../components/action-sheet/action-sheet.component";
import {HideOnScrollDirective} from "../directive/hide-on-scroll.directive";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderComponent,
    PostComponent,
    ActionSheetComponent,
    HideOnScrollDirective,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
