import Button from "./UI/Button";
import { useContext } from 'react';
import CartContext from "../store/CartContext";

const Header = ({ onShowCart }) => {
    const cartCtx = useContext(CartContext)
    const totalQuantity = cartCtx.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
      <header id="main-header">
        <div id="title">
          <img src="/assets/logo.jpg" alt="Logo" />
          <h1>React Food Order App</h1>
        </div>
        <nav>
        <Button textOnly onClick={onShowCart}>Cart ({totalQuantity})</Button>
        </nav>
      </header>
    );
  };
  
  export default Header;
  