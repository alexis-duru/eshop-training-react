import React from "react";

function Panier({ cart }) {
  let totalQuantity = 0;
  for (let item of cart) {
    totalQuantity += item.quantity;
  }

  return (
    <div className="panier-container">
      <div className="panier-container">
        <div className="panier-icon-container">
          <img
            className="panier-icon"
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="panier"
          />
        </div>
        <h2>Panier</h2>
      </div>
      <div className="panier-quantity">{totalQuantity}</div>
    </div>
  );
}

export default Panier;
