import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SigninComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hashnode-ui';
}
