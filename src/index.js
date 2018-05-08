import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

/*
import {
  SubscriptionClient,
  addGraphQLSubscriptions,
} from 'subscriptions-transport-ws';
*/
import Card from 'Components/Card';
import ChannelList from 'Components/ChannelList';
import ChannelDetails from 'Components/ChannelDetails';
import NotFound from 'Components/NotFound';

const GRAPHQL_ENDPOINT_URL = 'http://localhost:3002/graphql';

// Note: not using Apollo Boost as we want to add subscriptions
/*
const wsClient = new SubscriptionClient(`ws://localhost:3002/subscriptions`, {
  reconnect: true,
});
*/

const delayLink = new ApolloLink((operation, forward) => {
  const observer = forward(operation);
  return observer;
});

// Create an http link
const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT_URL,
  credentials: 'same-origin',
});

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
    delayLink,
    httpLink,
  ]),
  cache: new InMemoryCache(),
});

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <React.Fragment>
          <Card />
          <Link to="/" className="navbar">React + GraphQL Tutorial</Link>
          <Switch>
            <Route exact path="/" component={ChannelList}/>
            <Route path="/channel/:channelId" component={ChannelDetails}/>
            <Route component={ NotFound }/>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
