import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectLogin } from '../states/signin/signin.selector';
import { login } from '../states/signin/signin.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent {
  logged: Observable<number>

  constructor(private store: Store<AppState>, private router: Router){
    this.logged = this.store.select(selectLogin)
  }


  signin() {
    // Call the login API here and then implement the dispatcher inside to update the state
    this.store.dispatch(login())
    this.router.navigate(['blog']);
    console.log(this.logged)
  }

}
