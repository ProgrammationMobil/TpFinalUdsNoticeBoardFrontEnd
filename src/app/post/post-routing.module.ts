import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatedPostComponent} from "../components/created-post/created-post.component";
const routes: Routes = [
  {path:'',component:CreatedPostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
