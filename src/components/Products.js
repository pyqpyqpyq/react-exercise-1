import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import Product from './Product';
const Products = (props) => {
  console.log(props);
  return (
    <Fragment>
      <h1> This is Products Page</h1>
      <Link to="/products/1">product1</Link>
      <Link to="/products/2">product2</Link>
      <Link to="/products/3">product3</Link>
      <Route exact path="/products/:id" component={Product} />
      {/* <botton
        className="btn btn-primary"
        onClick={() => {
          props.history.push('/');
        }}
      >
        go home
      </botton> */}
    </Fragment>
  );
};

export default Products;
