import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import HeaderComponent from './components/Header';
import Routes from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
