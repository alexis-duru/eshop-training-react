import React from "react";
import QuantityControl from "./QuantityControl";

function ShoppingCart({ cart, onRemoveProduct, onUpdateProductQuantity }) {
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
    const productTotalPrice = item.product.price * item.quantity;
    item.productTotalPrice = Math.round(productTotalPrice * 100) / 100;
    totalPrice += item.productTotalPrice;
    totalPrice = Math.round(totalPrice * 100) / 100;
  }

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
    alert("Votre commande a bien été prise en compte !");
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
          <h2>Panier</h2>
          <div className="cart-wrapper">
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
                    <p>
                      Price : <div>{item.product.price} €</div>
                    </p>
                    <p>
                      Quantity : <div> x {item.quantity}</div>
                    </p>
                    <p>
                      Total Price : <div>{item.productTotalPrice} €</div>
                    </p>
                  </div>
                  <button
                    id="button-remove"
                    onClick={() => handleRemoveProduct(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-total-container">
              <span></span>
              <span></span>
              <div className="total-price-container">
                <p className="total-price">Total : {totalPrice} €</p>
              </div>
              <button onClick={handleValidateOrder}>Valider ma commande</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
