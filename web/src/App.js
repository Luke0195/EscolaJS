import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyles from './styles/global';
import HeaderComponent from './components/Header';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <>
      <Router history={history}>
        <HeaderComponent />
        <Routes />
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
