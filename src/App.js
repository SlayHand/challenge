import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext';
import { useState } from "react";
import CartModal from "./components/CartModal";

const App = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const showCartHandler = () => {
    setIsCartOpen(true);
  };

  const hideCartHandler = () => {
    setIsCartOpen(false);
  };

 return (
    <CartContextProvider>
      {isCartOpen && <CartModal onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </CartContextProvider>
  )
}

export default App;
