import "./cart-dropdown.styles.scss";
import React from "react";
import "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECkOUT</Button>
    </div>
  );
};

export default CartDropdown;
