import React, { useState } from "react";

function Item({ item, index, toggleCart }) {
  const [itemInCart, setItemInCart] = useState(false);

  function toggleCart() {
    setItemInCart(!itemInCart);
  }

  return (
    <li className={itemInCart ? "in-cart" : ""}>
      <button onClick={toggleCart}>{itemInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}
export default Item;
