import React, { useState } from "react";
import QuantityControl from "./QuantityControl";

function ProductListItem({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <li data-aos="fade-up" className="product-list-item">
      <p>{product.id}</p>
      <h2>{product.title}</h2>
      <h3 className="price">{product.price} €</h3>
      <p className="description">{product.description}</p>
      <QuantityControl
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
      />
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to cart
      </button>
      <h4>
        {product.tags.map((tag) => (
          <span className="tags" key={tag}>
            {tag}
          </span>
        ))}
      </h4>
    </li>
  );
}

export default ProductListItem;
