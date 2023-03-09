import React from "react";
import QuantityControl from "./QuantityControl";

function Basket({ cart, onRemoveProduct, onUpdateProductQuantity }) {
  const toggleCart = () => {
    const cartContainer = document.querySelector(".cart-container");
    cartContainer.style.transform = "translateX(0px)";
  };

  const closeCart = () => {
    const cartContainer = document.querySelector(".cart-container");
    cartContainer.style.transform = "translateX(400px)";
  };

  let totalQuantity = 0;
  cart.map((item) => {
    totalQuantity += item.quantity;
  });

  let totalPrice = 0;
  cart.map((item) => {
    const productTotalPrice = item.product.price * item.quantity;
    item.productTotalPrice = Math.round(productTotalPrice * 100) / 100;
    totalPrice += item.productTotalPrice;
    totalPrice = Math.round(totalPrice * 100) / 100;
  });

  const handleQuantityChange = (index, newQuantity) => {
    onUpdateProductQuantity(index, newQuantity);
  };

  const handleRemoveProduct = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this product?"
    );
    if (confirmDelete) {
      alert(`Product ${cart[index].product.title} removed from cart!`);
      onRemoveProduct(index);
    }
  };

  const handleValidateOrder = () => {
    alert("Your order has been taken into account !");
    closeCart();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

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
          <h2>Basket</h2>
          <div className="cart-wrapper">
            {cart.length === 0 && (
              <p className="empty-cart">Your basket is empty</p>
            )}
            <ul>
              {cart.map((item, index) => (
                <li className="cart-product" key={index}>
                  <span></span>
                  <p>{item.product.title}</p>
                  <QuantityControl
                    onQuantityChange={(newQuantity) =>
                      handleQuantityChange(index, newQuantity)
                    }
                    quantity={item.quantity}
                    onDecrement={() =>
                      handleQuantityChange(index, item.quantity - 1)
                    }
                    onIncrement={() =>
                      handleQuantityChange(index, item.quantity + 1)
                    }
                    min={1}
                    max={item.product.stock}
                  />
                  <div className="item-shopping-cart-container">
                    <div>
                      Price : <p>{item.product.price} €</p>
                    </div>
                    <div>
                      Quantity : <p> x {item.quantity}</p>
                    </div>
                    <div>
                      Total Price : <p>{item.productTotalPrice} €</p>
                    </div>
                  </div>
                  <button
                    id="button-remove"
                    onClick={() => handleRemoveProduct(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-total-container">
              <span></span>
              <span></span>
              <div className="total-price-container">
                <p className="total-quantity">
                  Total quantity : {totalQuantity}
                </p>
                <p className="total-price">Total : {totalPrice} €</p>
              </div>
              {totalQuantity > 0 && (
                <button onClick={handleValidateOrder}>Validate my order</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
