import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Author } from '../../models';
import { NgForm } from '@angular/forms';

import { AuthorService } from '../../services';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
  author = new Author();
  @Output()
  createAuthor = new EventEmitter<Author>();

  constructor(private readonly authorService: AuthorService, private readonly router: Router) { }

  ngOnInit() { }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('Submitting', this.author);
    this.authorService.createAuthor(this.author)
      .subscribe(author => {
        console.log('New author', author);
        this.router.navigateByUrl('/');
      });
    form.reset();
  }

}