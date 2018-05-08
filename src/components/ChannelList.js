import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import AddChannel from 'Components/AddChannel';

export const channelsListQuery = gql`
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
      <Query query={channelsListQuery} pollInterval={5000}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) {
            console.error({ error });
            return <div style={{ color: 'red' }}>Error: ChannelList</div>;
          }

          console.log('channels', data);

          const { channels } = data;

          return (
            <div>
              <AddChannel />
              {channels.map(({ id, name }) => {
                return (
                  <div key={id}>
                    <Link to={id < 0 ? `/` : `channel/${id}`}>{id}: {name}</Link>
                  </div>
                );
              })}
            </div>
          );
        }}
      </Query>
    </React.Fragment>
  );
};

export default ChannelList;
