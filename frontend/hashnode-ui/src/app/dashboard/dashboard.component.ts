import { Component, OnInit } from '@angular/core';
import  { GraphQLService } from '../graphql.operations';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GET_DRAFTS, GET_SCHEDULED_DRAFTS, GET_POSTS } from '../graphql.query';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private http: GraphQLService) {}
  drafts: any[] = [];
  scheduled_posts: any[] = [];
  posts: any[] = [];
  error: any;
  ngOnInit(): void {
    // TODO: query should be dynamic
    
    // TODO: variables should be dynamic
    const variables = {
      first: 20,
      // TODO: host should be dynamic
      host: 'osafalisayed.com' 
    };

    // TODO: Authorization should be dynamic
    const headers = new HttpHeaders().set('Authorization', '11bea1df-b6bd-4482-9355-b8c9e9794ab8');

    this.http.fetchData(GET_DRAFTS, variables, headers).subscribe((res: any) => {
      this.drafts = res.data.publication.drafts.edges;
    });
    this.http.fetchData(GET_SCHEDULED_DRAFTS, variables, headers).subscribe((res: any) => {
      this.scheduled_posts = res.data.publication.scheduledDrafts.edges;
    });
    this.http.fetchData(GET_POSTS, variables, headers).subscribe((res: any) => {
      this.posts = res.data.publication.posts.edges;
    });
  }
}
