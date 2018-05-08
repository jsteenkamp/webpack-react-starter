import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
  {
    getFortuneCookie
  }
`;

const FortuneCookie = () => {
  return (
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) {
          console.error({error});
          return <div style={{color: 'red'}}>Error: FortuneCookie</div>;
        }

        const { getFortuneCookie } = data;

        return <div>{getFortuneCookie}</div>;
      }}
    </Query>
  );
};

export default FortuneCookie;