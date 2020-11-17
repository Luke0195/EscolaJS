import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyles from './styles/global';
import HeaderComponent from './components/Header';
import Routes from './routes';

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <Routes />
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
