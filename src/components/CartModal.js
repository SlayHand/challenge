import { useEffect, useRef } from "react";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const CartModal = ({ onClose }) => {
  const dialog = useRef();
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const dialogNode = dialog.current;
    dialogNode.showModal();

    return () => dialogNode.close();
  }, []);

  return (
    <dialog className="modal" ref={dialog}>
      <h2>Cart</h2>
      {cartCtx.items.length === 0 && <p>Your cart is empty.</p>}
      <ul className="cart">
        {cartCtx.items.map((item) => (
          <li key={item.id} className="cart-item">
            <p>
              <b>{item.name}</b> × {item.quantity}
            </p>
            <div className="cart-item-actions">
              <Button>-</Button>
              <Button>+</Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        Total items: {totalItems}
      </div>
      <div className="modal-actions">
        <Button onClick={onClose} textOnly>Close</Button>
        <Button>Checkout</Button>
      </div>
    </dialog>
  );
};

export default CartModal;
