import React from "react";
import T from "prop-types"; // T - PropTypes (private prop)

const Product2 = ({
  product2Url,
  product2Alt,
  product2Name,
  product2Price
}) => (
  <div>
    <img src={product2Url} alt={product2Alt} width="640" />
    <h2> {product2Name} </h2>
    <p>Price: {product2Price}</p>
    <button type="button">Add to cart</button>
  </div>
);

// Default props
Product2.defaultProps = {
  product2Url:
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
};

export default Product2;
