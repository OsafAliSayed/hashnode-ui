import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectLogin } from '../states/signin/signin.selector';
import { login } from '../states/signin/signin.actions';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent {
  logged: Observable<number>

  constructor(private store: Store<AppState>){
    this.logged = this.store.select(selectLogin)
  }

  signin() {
    // Call the login API here and then implement the dispatcher inside to update the state
    this.store.dispatch(login())
    console.log(this.logged)
  }

}
