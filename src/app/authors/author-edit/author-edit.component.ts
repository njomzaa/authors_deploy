import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { NgForm} from '@angular/forms';

import { Author } from 'src/app/models';
import { AuthorService } from '../../services';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  edit_author = new Author();

  @Output()
  editAuthor = new EventEmitter<Author>();
  
  @Input()
  author: Author;

  constructor(
    private readonly authorService: AuthorService, 
    private readonly route: ActivatedRoute,
    private readonly router: Router) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      map(params => params.get('author_id')),
      switchMap(id => this.authorService.getAuthor(id))
    )
    .subscribe(author => (this.author = author));
  }

  onSubmit(event:Event, form: NgForm){
    event.preventDefault();
    console.log('Submitting author for edit', this.author);
    this.authorService.updateAuthor(this.author)
      .subscribe(author => {
        console.log('Update author', author);
        this.router.navigateByUrl('/');
      })  
    form.reset();
  }
}