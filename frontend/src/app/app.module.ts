import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { BlogpostListComponent } from './blogpost/blogpost-list/blogpost-list.component';
import { SearchbarComponent } from './blogpost/searchbar/searchbar.component';
import { BlogpostPreviewComponent } from './blogpost/blogpost-preview/blogpost-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { BlogpostDetailComponent } from './blogpost/blogpost-detail/blogpost-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BlogpostListComponent,
    SearchbarComponent,
    BlogpostPreviewComponent,
    PaginationComponent,
    BlogpostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
