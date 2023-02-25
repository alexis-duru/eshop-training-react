import React, { useState } from "react";
import ProductListItem from "./ProductListItem";
import ShoppingCart from "./ShoppingCart";
import products from "../data/eshop.json";

function ProductList() {
  const [productList, setProductList] = useState(products);

  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    // Cherche si le produit est déjà dans le panier
    const existingProduct = cart.find((item) => item.product.id === product.id);
    if (existingProduct) {
      // Si le produit est déjà dans le panier, je met à jour la quantité
      const updatedCart = cart.map((item) => {
        if (item.product.id === product.id) {
          return { product, quantity: item.quantity + quantity };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    } else {
      // Si le produit n'est pas dans le panier, je l'ajoute
      setCart([...cart, { product, quantity }]);
    }
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
      <ShoppingCart cart={cart} setCart={setCart} />
    </div>
  );
}

export default ProductList;
