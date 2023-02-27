import React from "react";

function QuantityControl({ quantity, onQuantityChange, showButtons = true }) {
  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    onQuantityChange(value >= 0 ? value : 0);
  };

  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="quantity-control">
      {showButtons && (
        <>
          <button
            className="control-left"
            onClick={handleDecrement}
            disabled={quantity === 0}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button className="control-right" onClick={handleIncrement}>
            +
          </button>
        </>
      )}
      {!showButtons && <p>Quantity : {quantity}</p>}
    </div>
  );
}

export default QuantityControl;
