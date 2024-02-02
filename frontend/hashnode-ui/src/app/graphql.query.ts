// Add your GraphQL query here

const GET_SCHEDULED_DRAFTS = `
query Publication($first: Int!, $host: String) {
    publication(host: $host) {
      scheduledDrafts(first: $first) {
        edges {
          node {
            title,
            id
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
              title,
              id
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
              title,
              id
            }
          }
        }
      }
    }
`;

const GET_ENTIRE_PUBLISHED_POST = `
  query Post($id: ID!) {
    post(id: $id) {
      id,
      title,
      brief,
      content {
        markdown
        html
        text
      }
    }
  }
`

const GET_ENTIRE_DRAFT_POST = `
  query Draft($id: ObjectId!) {
    draft(id: $id) {
      id
      slug
      title
      content{
        html
        markdown
        text
      }
    }
  }
`

var FETCH_POSTS_VARIABLES = {
  first: 20,
  // TODO: host should be dynamic - Fetch Host and add it in RequiredKeys.host
  host: "" 
};

var FETCH_ENTIRE_POSTS_VARIABLES = {
  id: "",
}

export { GET_SCHEDULED_DRAFTS, GET_DRAFTS, GET_POSTS, GET_ENTIRE_PUBLISHED_POST, GET_ENTIRE_DRAFT_POST, FETCH_POSTS_VARIABLES, FETCH_ENTIRE_POSTS_VARIABLES };