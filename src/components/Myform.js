import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Header from './Header';
import About from './About';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import Header from './Header';

class Myform extends Component {
  render() {
    return (
      <BrowserRouter>
        <h1>App page</h1>
        <main className="self_intro">
          <Header />
          {/* <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            about
          </Link> */}
        </main>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Myform;
