import React, { useState } from "react";
import ProductListItem from "./ProductListItem";
import Basket from "./Basket";
import products from "../data/eshop.json";

function ProductList() {
  const [productList, setProductList] = useState(products);

  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.product.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.product.id === product.id) {
          return { product, quantity: item.quantity + quantity };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  const removeProduct = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const updateProduct = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    setCart(newCart);
  };

  console.log("cart", cart);

  return (
    <div className="product-list-container">
      <div className="product-list">
        <ul className="product-list-wrapper">
          {productList.map((product) => (
            <ProductListItem
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </ul>
      </div>
      <Basket
        cart={cart}
        setCart={setCart}
        onRemoveProduct={removeProduct}
        onUpdateProductQuantity={updateProduct}
      />
    </div>
  );
}

export default ProductList;
