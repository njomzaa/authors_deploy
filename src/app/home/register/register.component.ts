import { Component, OnInit } from '@angular/core';

import { User } from '../../models';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = new User();
  registrationErrors: string[] = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(event: Event, user: User) {
    event.preventDefault();
    this.auth.register(user).subscribe(
      newUser => {
        console.log(newUser);

        this.router.navigateByUrl('books');
      },
      error => {
        console.log(error);
      }
    );
  }
}
