//utils; This folder will serve as a location to hold code and functionality that isn't necessarily React-based.


// We've used similar syntax from the test query we wrote using the GraphQL Playground earlier. 
//Now we've wrapped the entire query code in a tagged template literal using the imported gql function. 
// We've also saved it as QUERY_THOUGHTS and exported it using the ES6 module export syntax.

// we can import this function anywhere we need throughout the frontend 
import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
  query thoughts($username: String) {
    thoughts(username: $username) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;
