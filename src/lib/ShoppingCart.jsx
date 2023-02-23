import React, { useState } from "react";

function Cart({ cart }) {
  const [cartWidth, setCartWidth] = useState(0);

  const toggleCart = () => {
    const newCartWidth = cartWidth === 400 ? 0 : 400;
    setCartWidth(newCartWidth);
    console.log(newCartWidth === 0 ? "close" : "open");
  };

  let totalQuantity = 0;
  for (let item of cart) {
    totalQuantity += item.quantity;
  }

  return (
    <>
      <div className="cart-header" onClick={toggleCart}>
        <div className="cart-icon-container">
          {/* <h1>cart</h1> */}
          <img
            className="cart-icon"
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="panier"
          />
        </div>
        <p className="cart-quantity">{totalQuantity}</p>
        {/* <p className="cart-total">{totalProduct} €</p> */}
      </div>
      <div className="cart-container" style={{ width: cartWidth }}></div>
    </>
  );
}

export default Cart;
