import React, { useState } from "react";

function Cart({ cart }) {
  const [cartWidth, setCartWidth] = useState(0);

  const toggleCart = () => {
    const newCartWidth = cartWidth === 400 ? 0 : 400;
    setCartWidth(newCartWidth);
    // console.log(newCartWidth === 0 ? "close" : "open");
  };

  const closeCart = () => {
    setCartWidth(0);
  };

  let totalQuantity = 0;
  for (let item of cart) {
    totalQuantity += item.quantity;
  }

  return (
    <>
      <div className="cart-header" onClick={toggleCart}>
        <div className="cart-icon-container">
          <img
            className="cart-icon"
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="panier"
          />
        </div>
        <p className="cart-quantity">{totalQuantity}</p>
      </div>
      <div className="cart-container" style={{ width: cartWidth }}>
        <div className="cart-wrapper">
          <img
            className="close-icon"
            src="../assets/images/close.png"
            alt="fermer"
            onClick={closeCart}
          />
        </div>
      </div>
    </>
  );
}

export default Cart;
