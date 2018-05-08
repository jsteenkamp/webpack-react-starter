import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import NotFound from 'Components/NotFound';
import ChannelDetails from 'Components/ChannelDetails';
import ChannelList from 'Components/ChannelList';
import Container from 'Components/Container';

const GraphQLApp = () => {
  return (
    <BrowserRouter>
      <Container>
        <Link to="/" className="navbar">
          Home
        </Link>
        <Switch>
          <Route exact path="/" component={ChannelList} />
          <Route path="/channel/:channelId" component={ChannelDetails} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default GraphQLApp;
