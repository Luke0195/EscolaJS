import styled, { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';
import { primayDarkColor, primaryColor } from '../config/color';

export default createGlobalStyle`

*{
  padding:0;
  margin:0;
  outline:0;
  box-sizing:border-box
}

html,body, #root{
  height:100%;
}
body{
  -webkit-font-smoothing: antialiased !important;
  text-rendering:optimizeLegibility;
  background:${primayDarkColor};
}

body, input, button{
  font-size: 16px;
}

ul{
  list-style:none;
}
button{
  cursor: pointer;
  background:${primaryColor};
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius:4px;
  transition: background 0.5s ease-out;
}

button:hover{
  background: ${shade(0.2, '#C3073F')}
}
`;

export const Container = styled.section`
  width: 100%;
  max-width: 360px;
  background-color: #fff;
  margin: 40px auto;
  padding: 20px;
`;
