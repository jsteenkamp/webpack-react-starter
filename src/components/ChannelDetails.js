import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import MessageList from 'Components/MessageList';
import NotFound from 'Components/NotFound';

export const channelDetailsQuery = gql`
  query ChannelDetailsQuery($channelId: ID!) {
    channel(id: $channelId) {
      id
      name
      messages {
        id
        text
      }
    }
  }
`;

const ChannelDetails = ({match}) => {

  const {channelId} = match.params;

  console.log({channelId})

  return (
    <Query query={channelDetailsQuery} variables={{channelId}}>
      {({loading, error, data}) => {
        if (loading) {
          return <div>Loading...</div>;
        }
        if (error) {
          return <div>{error.message}</div>;
        }

        const {channel} = data;
        if (channel === null) {
          return <NotFound />;
        }

        return (
          <div>
            <h3>{channel.name}</h3>
            <MessageList messages={channel.messages} />
          </div>
        );
      }}
    </Query>
  );
};

export default ChannelDetails;
