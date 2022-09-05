import "./cart-dropdown.styles.scss";
import React from "react";
import "../button/button.component";
import Button from "../button/button.component";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>GO TO CHECkOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
