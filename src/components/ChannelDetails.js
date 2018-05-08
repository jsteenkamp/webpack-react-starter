import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
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

const messagesSubscription = gql`
  subscription messageAdded($channelId: ID!) {
    messageAdded(channelId: $channelId) {
      id
      text
    }
  }
`;

class ChannelDetails extends React.Component {
  // React 16 use cDM in place of cWM
  componentDidMount() {
    this.props.data.subscribeToMore({
      document: messagesSubscription,
      variables: {
        channelId: this.props.match.params.channelId,
      },
      updateQuery: (prev, {subscriptionData}) => {
        if (!subscriptionData.data) {
          return prev;
        }
        const newMessage = subscriptionData.data.messageAdded;
        // don't double add the message
        if (!prev.channel.messages.find((msg) => msg.id === newMessage.id)) {
          return Object.assign({}, prev, {
            channel: Object.assign({}, prev.channel, {
              messages: [...prev.channel.messages, newMessage],
            })
          });
        } else {
          return prev;
        }
      }
    });
  }

  render() {
    const {
      data: { loading, error, channel },
      match,
    } = this.props;
    const { channelId } = match.params;

    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error.message}</div>;
    }

    if (channel === null) {
      return <NotFound />;
    }

    return (
      <div>
        <h3>{channel.name}</h3>
        <MessageList messages={channel.messages} />
      </div>
    );
  }
}

export default graphql(channelDetailsQuery, {
  options: props => ({
    variables: { channelId: props.match.params.channelId },
  }),
})(ChannelDetails);
