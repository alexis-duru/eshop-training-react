import React, { useState } from "react";

function ProductListItem({ product, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  // console.log(quantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value >= 0 ? value : 0);
  };

  const handleAddToCart = () => {
    // console.log(product.id, product.title, product.price, quantity);
    addToCart({ product, quantity });
    console.log(quantity);
    setQuantity(0);
  };

  return (
    <li data-aos="fade-up" className="product-list-item" key={product.id}>
      <p>{product.id}</p>
      <h2>{product.title}</h2>
      <h3 className="price">{product.price} €</h3>
      <p className="description">{product.description}</p>
      <div className="container">
        <div className="button-container">
          <div className="button-number-select">
            <button
              className="button-quantity remove-from-cart-button"
              onClick={handleDecrement}
            >
              -
            </button>

            <input
              className="insert-add-to-cart-button"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
            />

            <button
              className="button-quantity add-to-cart-button"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
        {/* <div className="artwork">
          <img src={product.image} alt={product.title} />
        </div> */}
      </div>
      <h4>
        {product.tags.map((tag, index) => (
          <span className="tags" key={index}>
            {tag}
          </span>
        ))}
      </h4>
    </li>
  );
}

export default ProductListItem;
