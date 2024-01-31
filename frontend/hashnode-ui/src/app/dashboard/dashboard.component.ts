import { Component, OnInit } from '@angular/core';
import  { GraphQLService } from '../graphql.operations';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


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
  error: any;
  ngOnInit(): void {
    // TODO: query should be dynamic
    const query = `
    query Publication($first: Int!, $host: String) {
      publication(host: $host) {
        drafts(first: $first) {
          edges {
            node {
              title
            }
          }
        }
      }
    }
    `;
    // TODO: variables should be dynamic
    const variables = {
      first: 4,
      // TODO: host should be dynamic
      host: 'osafalisayed.com' 
    };

    // TODO: Authorization should be dynamic
    const headers = new HttpHeaders().set('Authorization', '11bea1df-b6bd-4482-9355-b8c9e9794ab8');

    this.http.fetchData(query, variables, headers).subscribe((res: any) => {
      this.drafts = res.data.publication.drafts.edges;
    });
  }
}
