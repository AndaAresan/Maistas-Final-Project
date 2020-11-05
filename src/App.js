import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Restaurants from './pages/restaurants';
import Details from './pages/details';
import Cart from './pages/cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Restaurants} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
