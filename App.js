import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/" component={Products} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
