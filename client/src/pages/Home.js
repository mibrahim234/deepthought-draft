import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
// importing the useQuery Hook from Apollo Client. 
// This will allow us to make requests to the GraphQL server we connected to and made available to the application using the <ApolloProvider> component in App.js.
import ThoughtList from '../components/ThoughtList';
// importing the thoughtlist component 

// When we load the Home component in the application, we'll execute the query for the thought data.
const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  //  Because this is asynchronous, just like using fetch(), apollo/client library provides a loading property to indicate that the request isn't done just yet. 
  // When it's finished and we have data returned from the server, that information is stored in the destructured data property.

  // with the loading property, we'll be able to conditionally render data based on whether or not there is data to even display.

  // get the thought data out of the query's response
  // response comes in big data object so use . to access data
const thoughts = data?.thoughts || [];
// optional chaining (new to js)
// we're saying is, if data exists, store it in the thoughts constant we just created. If data is undefined, then save an empty array to the thoughts component.
console.log(thoughts);
  return (
    <main>
  <div className="flex-row justify-space-between">
    <div className="col-12 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
      )}
    </div>
  </div>
</main>
// ^With this, we use a ternary operator to conditionally render the <ThoughtList> component. 

// If the query hasn't completed and loading is still defined, we display a message to indicate just that.

//  Once the query is complete and loading is undefined, we pass the thoughts array and a custom title to the <ThoughtList> component as props.
  );
};


export default Home;
