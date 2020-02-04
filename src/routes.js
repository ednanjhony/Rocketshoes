import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Carrinho from './pages/Carrinho';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Carrinho} />
    </Switch>
  );
}
