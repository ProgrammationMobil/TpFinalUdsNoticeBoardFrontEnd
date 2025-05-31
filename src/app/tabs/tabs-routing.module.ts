import { RouterModule, Routes } from '@angular/router';
import {NgModule} from "@angular/core";
import {TabsComponent} from "./tabs.component";
import {authGuard} from "../auth/guards/auth.guard";
const routes: Routes = [
  { path: '',
    component: TabsComponent,
    children:[
      {
        path:'home',
        loadChildren:()=>import("../home/home.module").then(m => m.HomePageModule),
        canActivate:[authGuard]
      },
      {
        path:'auth',
        loadChildren:()=>import('../auth/auth.module').then(m => m.AuthModule)
      },
      {
        path:'post',
        loadChildren:()=>import('./../post/post.module').then(m => m.PostModule),
        canActivate:[authGuard]
      },
      {
        path:'notification',
        loadChildren:()=>import('./../notification/notification.module').then(m => m.NotificationModule),
        canActivate:[authGuard]
      },
      {
        path:'',
        redirectTo:"home",
        pathMatch:"full",
      }
    ]
  },
  {
    path:'',
    redirectTo:"home",
    pathMatch:"full",
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsRoutingModule { }
