import React, { Component } from 'react';

// const Product = (props) => {
//   console.log(props);
//   return (
//     <Fragment>

//       <h1> This is Products detail: {this.propsd}</h1>
//     </Fragment>
//   );
// };
class Product extends Component {
  render() {
    console.log(this.props);
    return <h2>This is Product Details:{this.props.match.params.id}</h2>;
  }
}
export default Product;
