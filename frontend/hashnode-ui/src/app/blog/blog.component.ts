import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_DRAFTS } from '../graphql.operations';
import { CommonModule } from '@angular/common';
import { GraphQLService } from '../graphql.service';
import gql from 'graphql-tag';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  posts: any[] = [];
  // error: any;

  loading: boolean = true;
  error: any;
  data: any;

  constructor(private graphqlService: GraphQLService) {}

  ngOnInit() {
    const query: any = gql`
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
      host: 'osafalisayed.com' // Replace with actual variable values
    };

    this.graphqlService.query(query, variables).subscribe(
      (response) => {
        console.log("RESPOSNSE::", response);
        this.loading = false;
        this.data = response.data;
      },
      (error) => {
        console.log("Error::", error);
        this.loading = false;
        this.error = error;
      }
    );
  }

  // constructor(private apollo: Apollo) {

  // }

  // ngOnInit(): void {
  //   let header: any = { "Authorization": "11bea1df-b6bd-4482-9355-b8c9e9794ab8" };
  //   this.apollo.watchQuery({
  //     query: GET_DRAFTS, 
  //     variables: {"first": 4, "host": "osafalisayed.com"},
  //     context: header = { header }

  //   }).valueChanges.subscribe(({ data, error }: any) => {
  //     console.log("DATA::", data);
  //     let publication = data['publication']
  //     console.log("PUBLICATION::", publication);
  //     let posts = publication['posts']
  //     console.log("POSTS::", posts);
  //     let edges = posts['edges']
  //     console.log("EDGES::", edges);

  //     console.log("ERROR::", error);
  //     this.posts = edges;
  //     this.error = error;
  //   })
  //   console.log("POSTS::", this.posts);
  // }

  // javaScriptWalaFunction() {
  //   fetch('https://rickandmortyapi.com/graphql', {
  //     method: 'POST',

  //     headers: {
  //       "Authorization": "11bea1df-b6bd-4482-9355-b8c9e9794ab8"
  //     },

  //     body:{
  //       'query': GET_DRAFTS,
  //       "variables"
        
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(res => console.log(res.data.characters.results))
  // }

}
