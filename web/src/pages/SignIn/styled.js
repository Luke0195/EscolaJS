import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 20px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${(props) => (props.isWhite ? '#fff' : '#0000FF')};

  small {
    font-size: 30px;
    color: green;
  }
`;
