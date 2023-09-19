import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartActions";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state);

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => handleRemove(item.id)}>제거</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
