import React, { useState } from "react";

function ProductListItem({ product, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ product, quantity });
    setQuantity(quantity);
  };

  return (
    <li className="product-list-item" key={product.id}>
      <div>{product.title}</div>
      <div>{product.price} €</div>
      <div>{product.description}</div>
      <div>{product.tags}</div>
      <button className="remove-from-cart-button" onClick={handleDecrement}>
        -
      </button>
      <span className="quantity">{quantity}</span>
      <button className="add-to-cart-button" onClick={handleIncrement}>
        +
      </button>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Ajouter au panier
      </button>
    </li>
  );
}

export default ProductListItem;
