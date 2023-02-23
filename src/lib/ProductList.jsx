import React, { useState } from "react";
import ProductListItem from "./ProductListItem";
import ShoppingCart from "./ShoppingCart";
import products from "../data/eshop.json";

function ProductList() {
  const [productList, setProductList] = useState(products);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);

    if (itemIndex === -1) {
      const newItem = { ...product };
      setCart([...cart, newItem]);
    } else {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += product.quantity;
      setCart(updatedCart);
    }
  };

  return (
    <div className="product-list-container">
      <div className="product-list">
        <ul className="product-list-wrapper">
          {productList.map((product, index) => (
            <ProductListItem
              key={index}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </ul>
      </div>
      <ShoppingCart cart={cart} />
    </div>
  );
}

export default ProductList;