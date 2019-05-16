import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CookieModule } from 'ngx-cookie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromAuthors from './authors';
import { NavComponent } from './nav/nav.component';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { AuthorNewComponent } from './authors/author-new/author-new.component';
import { AuthorShowComponent } from './authors/author-show/author-show.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromAuthors.components,
    NavComponent,
    AuthorEditComponent,
    AuthorListComponent,
    AuthorNewComponent,
    AuthorShowComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CookieModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
