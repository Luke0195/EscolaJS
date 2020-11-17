import styled from 'styled-components';

import { primaryColor } from '../../config/color';

export const Nav = styled.header`
  width: 100%;
  background: ${primaryColor};
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  div {
    width: 100%;
    max-width: 150px;

    display: flex;
    justify-content: space-between;
  }

  svg {
    color: #fff;
  }
`;
