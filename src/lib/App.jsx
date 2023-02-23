import React, { useEffect } from "react";
import ProductList from "./ProductList";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="app-container">
      <ProductList />
    </div>
  );
}

export default App;
