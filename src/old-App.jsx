import React, { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Produit 1",
      price: 10.0,
      description: "Description du produit 1",
    },
    {
      id: 2,
      name: "Produit 2",
      price: 20.0,
      description: "Description du produit 2",
    },
    {
      id: 3,
      name: "Produit 3",
      price: 30.0,
      description: "Description du produit 3",
    },
  ]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter((p) => p.id !== product.id));
    } else {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    }
  };

  const cartTotal = cart.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  return (
    <div>
      <h1>Liste des produits</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Prix : {product.price} €</p>
            <button onClick={() => handleAddToCart(product)}>
              Ajouter au panier
            </button>
          </li>
        ))}
      </ul>
      <h2>Panier</h2>
      <p>
        Nombre de produits : {cart.reduce((acc, cur) => acc + cur.quantity, 0)}
      </p>
      <p>Total : {cartTotal} €</p>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Prix unitaire : {product.price} €</p>
            <p>Quantité : {product.quantity}</p>
            <button onClick={() => handleRemoveFromCart(product)}>-</button>
            <button onClick={() => handleAddToCart(product)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
