import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import FortuneCookie from 'Components/FortuneCookie';
import Container from 'Components/Container';

const query = gql`
  {
    author(firstName: "Edmond", lastName: "Jones") {
      firstName
      lastName
      posts {
        id
        views
      }
    }
  }
`;

class Card extends React.Component {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) {
            console.error({ error });
            return <div style={{ color: 'red' }}>Error: Card</div>;
          }

          const { firstName, lastName, posts } = data.author;

          return (
            <Container>
              <h2>
                {firstName} {lastName}
              </h2>
              <ul>
                {posts.map(({ id, views }) => {
                  return (
                    <li key={id}>
                      ID: {id} Views: {views}
                    </li>
                  );
                })}
              </ul>
              <FortuneCookie />
            </Container>
          );
        }}
      </Query>
    );
  }
}

// example of using a shape for props object
/*
<Card
    card={{
      title: 'Card Title',
      description: 'Card description',
      score: 100,
      active: true,
    }}
  />
 */

Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    score: PropTypes.number,
    active: PropTypes.bool,
  }),
};

export default Card;
