import React from 'react';
import SignInPage from './pages/SignIn';
import GlobalStyles from './styles/global';
import HeaderComponent from './components/Header';

function App() {
  return (
    <>
      <HeaderComponent />
      <SignInPage />
      <GlobalStyles />
    </>
  );
}

export default App;
