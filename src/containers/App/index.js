import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrderPage from '../OrderPage';

const NoMatch = () => <h1>404</h1>;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={`/`} component={OrderPage} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
