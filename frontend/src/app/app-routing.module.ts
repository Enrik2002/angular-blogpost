import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {BlogpostListComponent} from "./blogpost/blogpost-list/blogpost-list.component";
import {BlogpostDetailComponent} from "./blogpost/blogpost-detail/blogpost-detail.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'blogposts', component: BlogpostListComponent},
  { path: 'blogposts/:id', component: BlogpostDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
