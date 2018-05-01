import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { title, description, score = 0, active = false } = this.props.card;
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          <li>{score}</li>
          <li>{(active ? 'true' : 'false')}</li>
        </ul>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    score: PropTypes.number,
    active: PropTypes.bool,
  })
};

export default Card;
