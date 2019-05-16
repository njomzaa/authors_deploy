import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { BehaviorSubject } from 'rxjs';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly base = '/api/auth';
  readonly isAuthed$ = new BehaviorSubject(this.isAuthed());

  constructor(
    private readonly http: HttpClient,
    private readonly cookieService: CookieService
  ) {}

  login(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.base}/login`, user)
      .pipe(tap(() => this.isAuthed$.next(true)));
  }

  register(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.base}/register`, user)
      .pipe(tap(() => this.isAuthed$.next(true)));
  }

  logout(): Observable<void> {
    return this.http
      .delete<void>(`${this.base}/logout`)
      .pipe(tap(() => this.isAuthed$.next(false)));
  }

  isAuthed(): boolean {
    const userId = this.cookieService.get('userID');
    const expiration = parseInt(this.cookieService.get('expiration'), 10);
    const session = this.cookieService.get('session');

    return Boolean(userId && expiration && session && expiration > Date.now());
  }
}
