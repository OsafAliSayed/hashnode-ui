// TODO: Add your GraphQL query here

const GET_SCHEDULED_DRAFTS = `
query Publication($first: Int!, $host: String) {
    publication(host: $host) {
      scheduledDrafts(first: $first) {
        edges {
          node {
            title
          }
        }
      }
    }
  }
`;

const GET_DRAFTS = `
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

const GET_POSTS = `
    query Publication($first: Int!, $host: String) {
      publication(host: $host) {
        posts(first: $first) {
          edges {
            node {
              title
            }
          }
        }
      }
    }
`;

export { GET_SCHEDULED_DRAFTS, GET_DRAFTS, GET_POSTS };