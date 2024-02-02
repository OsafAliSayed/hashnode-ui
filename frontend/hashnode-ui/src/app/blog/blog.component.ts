import { Component, OnInit } from '@angular/core';
import  { GraphQLService } from '../graphql.operations';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { PostValues } from '../global.variables';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, EditorModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})


@Injectable({
  providedIn: 'root'
})
export class BlogComponent implements OnInit {
  constructor(private http: GraphQLService) {}
  posts: any[] = [];
  error: any;
  postValue = "";

  ngOnInit(): void {
    this.postValue = PostValues.postMarkdown
  }

  publishPost() {
    
  }
}
