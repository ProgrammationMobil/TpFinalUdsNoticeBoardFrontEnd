import { RouterModule, Routes } from '@angular/router';
import {NgModule} from "@angular/core";
import {TabsComponent} from "./tabs.component";
const routes: Routes = [
  { path: '',
    component: TabsComponent,
    children:[
      {
        path:'home',
        loadChildren:()=>import("../home/home.module").then(m => m.HomePageModule)
      },
      {
        path:'auth',
        loadChildren:()=>import('../auth/auth.module').then(m => m.AuthModule)
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
