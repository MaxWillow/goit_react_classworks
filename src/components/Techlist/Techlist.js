import React from "react";
import T from "prop-types"; // T - PropTypes (private prop)

const Techlist = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

Techlist.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string.isRequired
    })
  ).isRequired
};

export default Techlist;
