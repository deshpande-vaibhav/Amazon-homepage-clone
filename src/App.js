import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Header from './Header';
import './Header.css';
import Home from './Home';
// import Description from './Description';
import Book from './Book';
import Oximeter from './Oximeter';
import Mask from './Mask';
import Laptop from './Laptop';
import Iphone from './Iphone';
import Tv from './Tv';
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

          <Route path="/book">
            <Header />
            <Book />
          </Route>
          
          <Route path="/oximeter">
            <Header />
            <Oximeter />
          </Route>

          <Route path="/mask">
            <Header />
            <Mask />
          </Route>

          <Route path="/laptop">
            <Header />
            <Laptop />
          </Route>

          <Route path="/iphone">
            <Header />
            <Iphone />
          </Route>

          <Route path="/tv">
            <Header />
            <Tv />
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
