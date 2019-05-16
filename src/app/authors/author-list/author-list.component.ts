import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Author } from '../../models';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit, OnDestroy {
  authors: Author[] = [];
  selectedAuthor: Author;
  clicked: boolean = false;
  sub: Subscription;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    console.log('ng on init');
    this.sub = this.authorService.getAuthors().subscribe(authors => {
      console.log(authors); 
      this.authors = authors;
    });
  }
  
  ngOnDestroy(): void {
    console.log('ng on destroy');
    this.sub.unsubscribe();
  }

  onSelect(author: Author){
    console.log('selecting author', author);
    this.selectedAuthor = this.selectedAuthor === author ? null : author;  
  }
 
  onCreate(author: Author){
    console.log('adding author', author);
    this.authorService.createAuthor(author)
    .subscribe(createdAuthor => {
      console.log(createdAuthor)
      this.authors.push(createdAuthor);
    })
  }

  onDelete(event: Event, author: Author){
    event.stopPropagation();
    console.log(author._id);
    this.authorService.removeAuthor(author._id).subscribe(removedAuthor => {
      console.log('deleting author', removedAuthor);
      this.authors = this.authors.filter(author => author._id !== removedAuthor._id);
    })
  }

  onEdit(author: Author){
    this.authorService.updateAuthor(author).subscribe(updateAuthor => {
      console.log('updated', updateAuthor);
      //this.tasks = this.tasks.
    })
  }
}