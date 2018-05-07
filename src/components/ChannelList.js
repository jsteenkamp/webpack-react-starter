import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`;

const ChannelList = () => {
  return (
    <React.Fragment>
      <h3>Channel List</h3>
      <Query query={channelsListQuery}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) {
            console.error({ error });
            return <div style={{ color: 'red' }}>Error</div>;
          }

          console.log({ data });
          const { channels } = data;

          return (
            <ul>
              {channels.map(({ id, name }) => {
                return (
                  <li key={id}>
                    {id} {name}
                  </li>
                );
              })}
            </ul>
          );
        }}
      </Query>
    </React.Fragment>
  );
};

export default ChannelList;
