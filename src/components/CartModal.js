import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const CartModal = ({ onClose }) => {
  const dialog = useRef();
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    const node = dialog.current;
    node.showModal();

    return () => node.close();
  }, []);

  const handleCheckout = () => {
    alert("Thank you for your order!");
    cartCtx.clearCart();
    onClose();
  };

  const cartContent = (
    <dialog className="modal" ref={dialog}>
      <h2>Cart</h2>

      {cartCtx.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart">
            {cartCtx.items.map((item) => (
              <li key={item.id} className="cart-item">
                <p>
                  <b>{item.name}</b> × {item.quantity}
                </p>
              </li>
            ))}
          </ul>
          <div className="modal-actions">
            <Button textOnly onClick={onClose}>Close</Button>
            <Button onClick={handleCheckout}>Checkout</Button>
          </div>
        </>
      )}
    </dialog>
  );

  return ReactDOM.createPortal(cartContent, document.getElementById("modal"));
};

export default CartModal;
