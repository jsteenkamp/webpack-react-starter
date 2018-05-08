import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { channelsListQuery } from 'Components/ChannelList';

const addChannelMutation = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;

const AddChannel = () => {
  const handleKeyUp = (event, addChannel) => {
    const { keyCode, target } = event;
    if (keyCode === 13) {
      addChannel({variables: {name: target.value}}).then( response => {
        console.log({response})
        target.value = '';
      });
    }
  };
  return (
    <Mutation
      mutation={addChannelMutation}
      //refetchQueries={[{ query: channelsListQuery }]}
      /*update={(store, { data: { addChannel } }) => {
        // Read the data from the cache for this query.
        const data = store.readQuery({ query: channelsListQuery });
        // Add our channel from the mutation to the end.
        data.channels.push(addChannel);
        // Write the data back to the cache.
        store.writeQuery({ query: channelsListQuery, data });
      }}*/
    >
      {(addChannel, { data }) => {
        // data contains the result of the mutation
        return (
          <input
            type="text"
            placeholder="New channel"
            onKeyUp={event => handleKeyUp(event, addChannel)}
          />
        );
      }}
    </Mutation>
  );
};

export default AddChannel;
