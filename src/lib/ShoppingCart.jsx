import React, { useState } from "react";

function ShoppingCart({ cart, onRemoveProduct }) {
  const toggleCart = () => {
    const cartContainer = document.querySelector(".cart-container");
    cartContainer.style.transform = "translateX(0px)";
  };

  const closeCart = () => {
    const cartContainer = document.querySelector(".cart-container");
    cartContainer.style.transform = "translateX(400px)";
  };

  let totalQuantity = 0;
  for (let item of cart) {
    totalQuantity += item.quantity;
  }

  let totalPrice = 0;
  for (let item of cart) {
    totalPrice += item.product.price * item.quantity;
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
      <div className="cart-container">
        <div className="cart-wrapper">
          <img
            className="close-icon"
            src="../assets/images/close.png"
            alt="fermer"
            onClick={closeCart}
          />
          <h2>Panier</h2>
          <div className="cart-wrapper">
            <ul>
              {cart.map((item, index) => (
                <li className="cart-product" key={index}>
                  <span></span>
                  <p>{item.product.title}</p>
                  <p>Quantity : {item.quantity}</p>
                  <p>Price : {item.product.price} €</p>
                  <button onClick={() => onRemoveProduct(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="cart-total-container">
              <span></span>
              <span></span>
              <div className="total-price-container">
                <p>Total : {totalPrice} €</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
