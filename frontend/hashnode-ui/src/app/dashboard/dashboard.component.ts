import { Component, OnInit } from '@angular/core';
import  { GraphQLService } from '../graphql.operations';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GET_DRAFTS, GET_SCHEDULED_DRAFTS, GET_POSTS } from '../graphql.query';
import { RequiredKeys } from '../global.variables';

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
    console.log("DASHBOARD::", RequiredKeys);
    // TODO: variables should be dynamic
    const variables = {
      first: 20,
      // TODO: host should be dynamic - Fetch Host and add it in RequiredKeys.host
      host: 'osafalisayed.com' 
    };

    // '11bea1df-b6bd-4482-9355-b8c9e9794ab8'
    const headers = new HttpHeaders().set('Authorization', RequiredKeys.apiKey);
    console.log("HEADERS", headers);

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
