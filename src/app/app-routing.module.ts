import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromAuthors from './authors';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'authors',
    component: fromAuthors.AuthorListComponent,
  },
  {
    path: 'authors/new',
    component: fromAuthors.AuthorNewComponent,
  },
  {
    path: 'authors/:author_id',
    component: fromAuthors.AuthorShowComponent,
  },
  {
    path: 'authors/edit/:author_id',
    component: fromAuthors.AuthorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
