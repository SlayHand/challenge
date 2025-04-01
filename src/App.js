import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext';
import { useState, useContext } from "react";
import CartModal from "./components/CartModal";
import CartContext from './store/CartContext';

const AppContent = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCtx = useContext(CartContext);

  const showCartHandler = () => {
    setIsCartOpen(true);
  };

  const hideCartHandler = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      {isCartOpen && cartCtx.items.length > 0 && (
        <CartModal onClose={hideCartHandler} />
      )}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </>
  )
}

const App = () => {
  return (
    <CartContextProvider>
      <AppContent />
    </CartContextProvider>
  )
}

export default App;
