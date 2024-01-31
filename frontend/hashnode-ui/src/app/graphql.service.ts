import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class GraphQLService {
  private graphqlEndpoint = 'https://gql.hashnode.com/'; // Replace with your GraphQL endpoint
  private authToken = 'YOUR_AUTH_TOKEN'; // Replace with your actual authorization token

  constructor(private http: HttpClient) {}

  query(query: string, variables?: any) {
    const headers = new HttpHeaders({
      'Authorization': '11bea1df-b6bd-4482-9355-b8c9e9794ab8', 
    });

    return this.http.post<any>(
      this.graphqlEndpoint,
      {
        query,
        variables,
      },
      { headers }
    );
  }
}