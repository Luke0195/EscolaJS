import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Error404 from '../pages/Error404';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/teste" component={Error404} />
      </Switch>
    </>
  );
}
