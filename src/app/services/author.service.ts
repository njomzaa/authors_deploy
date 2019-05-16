import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Author } from '../models';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
  private readonly base = 'http://localhost:8000/api/authors';
  constructor(private readonly http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.base);
  }
  getAuthor(id: string): Observable<Author> {
    console.log(id);
    return this.http.get<Author>(`${this.base}/${id}`);
  }
  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.base, author);
  }
  removeAuthor(id: string): Observable<Author> {
    return this.http.delete<Author>(`${this.base}/${id}`);
  }
  updateAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.base}/${author._id}`, author);
  }
}