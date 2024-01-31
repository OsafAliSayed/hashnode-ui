import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphQLService {
  constructor(private http: HttpClient) { }
  fetchData(q: string, v: any, h: any): any {
    const url = 'https://gql.hashnode.com';
    const query = q;
    const variables = v;

    const headers = h
    return this.http.post(url, { query, variables }, { headers });
  }
}
