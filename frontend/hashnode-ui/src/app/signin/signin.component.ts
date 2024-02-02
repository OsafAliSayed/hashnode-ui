import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequiredKeys } from '../global.variables';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent {
  
  apiKey: string = "";
  publicationId: string = "";

  constructor( private router: Router ){
    
  }

  ngOnInIt(){
    
  }


  signin(apiKey: string, publicationId: string) {
    // Call the login API here and then fetch the host as well and set in RequiredKeys.host
    RequiredKeys.apiKey = this.apiKey;
    RequiredKeys.publicationId = this.publicationId;
    this.router.navigate(['dashboard']);
  }

}
