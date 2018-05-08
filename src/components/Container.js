import styled from 'styled-components';

const Container = styled.div`
 margin: 10px;
  padding: 10px;
  border: 1px solid skyblue;
  background: lightskyblue;
  & h2 {
    margin: 0;
    padding: 0;
  }
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default Container;