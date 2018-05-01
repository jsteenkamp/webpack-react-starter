import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: papayawhip;
`;

class Comp extends React.Component {
  render() {
    const {value = 0} = this.props;
    return <Wrapper>Number: {value}</Wrapper>;
  }
}

Comp.propTypes = {
  value: PropTypes.string,
};

export default Comp;
