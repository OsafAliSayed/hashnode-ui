import { Component, OnInit } from '@angular/core';
import  { GraphQLService } from '../graphql.operations';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
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
  ngOnInit(): void {
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
    const variables = {
      first: 4,
      host: 'osafalisayed.com' 
    };

    const headers = new HttpHeaders().set('Authorization', '11bea1df-b6bd-4482-9355-b8c9e9794ab8');

    this.http.fetchData(query, variables, headers).subscribe((res: any) => {
      console.log(res.data.publication.drafts.edges);
      this.posts = res.data.publication.drafts.edges;
    });
  }
}
