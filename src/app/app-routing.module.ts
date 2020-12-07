import { HomeComponent } from './home/home.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes:Routes=[
  //{path:"",component:PostListComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule{

}

