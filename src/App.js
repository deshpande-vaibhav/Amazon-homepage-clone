import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Header from './Header';
import './Header.css';
import Home from './Home';
import Description from './Description';
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>

          <Route path="/login">
            <h1>Login</h1>
          </Route>

          <Route path="/description">
            <Header />
            <Description/>
          </Route>
          
          <Route path="/">
            <Header />
              <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
