import { Component } from '@angular/core';
import  { GraphQLService } from '../graphql.operations';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { GET_DRAFTS, GET_SCHEDULED_DRAFTS, GET_POSTS, FETCH_POSTS_VARIABLES, FETCH_ENTIRE_POSTS_VARIABLES, GET_ENTIRE_PUBLISHED_POST, GET_ENTIRE_DRAFT_POST } from '../graphql.query';
import { PostValues, RequiredKeys } from '../global.variables';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private http: GraphQLService, private router: Router) {}
  drafts: any[] = [];
  scheduled_posts: any[] = [];
  posts: any[] = [];
  error: any;
  headers = new HttpHeaders().set('Authorization', RequiredKeys.apiKey);
  
  ngOnInit(): void {
    this.fetchAllPosts();

  }

  fetchAllPosts(){
    //ToDo - Fetch Host Link in SignInComponent
    FETCH_POSTS_VARIABLES.host = RequiredKeys.host;
    console.log(FETCH_POSTS_VARIABLES);
    this.http.fetchData(GET_DRAFTS, FETCH_POSTS_VARIABLES, this.headers).subscribe((res: any) => {
      this.drafts = res.data.publication.drafts.edges;
    });
    this.http.fetchData(GET_SCHEDULED_DRAFTS, FETCH_POSTS_VARIABLES, this.headers).subscribe((res: any) => {
      this.scheduled_posts = res.data.publication.scheduledDrafts.edges;
    });
    this.http.fetchData(GET_POSTS, FETCH_POSTS_VARIABLES, this.headers).subscribe((res: any) => {
      this.posts = res.data.publication.posts.edges;
    });
  }

  editDraftPost(id: string){
    FETCH_ENTIRE_POSTS_VARIABLES.id = id;
    this.http.fetchData(GET_ENTIRE_DRAFT_POST, FETCH_ENTIRE_POSTS_VARIABLES, this.headers).subscribe((res: any) => {
      PostValues.id = id;
      PostValues.post = res.data.draft.content.text;
      PostValues.title = res.data.draft.title;
      PostValues.postMarkdown = res.data.draft.content.markdown;

      this.router.navigate(['blog']);
    });
    
  }

  editPublishedPost(id:string){
    FETCH_ENTIRE_POSTS_VARIABLES.id = id;
    this.http.fetchData(GET_ENTIRE_PUBLISHED_POST, FETCH_ENTIRE_POSTS_VARIABLES, this.headers).subscribe((res: any) => {
      PostValues.id = id;
      PostValues.post = res.data.post.content.text;
      PostValues.title = res.data.post.title;
      PostValues.postMarkdown = res.data.post.content.markdown;

      this.router.navigate(['blog']);
    });
  }

  publishPost(){
    //ToDo: Implement This
  }

  deletePost(){
    //ToDo: Implement This
  }

}
