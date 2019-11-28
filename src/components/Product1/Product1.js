import React from "react";
import T from "prop-types"; // T - PropTypes (private prop)

const Product1 = ({ productUrl, productPrice }) => {
  return (
    <div>
      <img src={productUrl} alt="Tacos With Lime" width="640" />
      <h2>Tacos With Lime</h2>
      <p>Price: {productPrice}</p>
      <button type="button">Add to cart</button>
    </div>
  );
};

Product1.defaultProps = {
  productPrice: 500
};

Product1.propTypes = {
  productUrl: T.string.isRequired, // required props
  productPrice: T.number // is not required, should be describe in defaultProps
};

export default Product1;
