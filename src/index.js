import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import Card from 'Components/Card';
import GraphQLApp from 'Components/GraphQLApp';

const GRAPHQL_ENDPOINT_URL = 'http://localhost:3002/graphql';

// Note: not using Apollo Boost as we want to add subscriptions
const wsLink = new WebSocketLink({
  uri: `ws://localhost:3002/subscriptions`,
  options: {
    reconnect: true,
  },
});

// Create an http link
const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT_URL,
  credentials: 'same-origin',
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    link,
  ]),
  cache: new InMemoryCache(),
});

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <Card />
        <GraphQLApp />
      </React.Fragment>
    </ApolloProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
