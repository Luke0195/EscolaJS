import styled, { createGlobalStyle } from 'styled-components';

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
}

body, input, button{
  font-size: 16px;
}

ul{
  list-style:none;
}
button{
  cursor: pointer;
}
`;

export const Container = styled.section`
  width: 100%;
  max-width: 700px;
  background-color: '#fff';
  margin: 0 auto;
`;
