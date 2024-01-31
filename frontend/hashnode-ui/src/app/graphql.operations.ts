import { gql } from "apollo-angular";

const GET_DRAFTS = gql`
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
`

export { GET_DRAFTS };
