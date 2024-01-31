import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

const uri = 'https://gql.hashnode.com/'; // <-- add the URL of the GraphQL server here

export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  const token = '11bea1df-b6bd-4482-9355-b8c9e9794ab8';
  return {
    link: httpLink.create({
      uri,

    }),
    cache: new InMemoryCache(),
  };
}


export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
