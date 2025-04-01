import { createContext, useState } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {}
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    // Testandmed kontrolli jaoks
    { id: 'm1', name: 'Mac & Cheese', quantity: 2 },
    { id: 'm2', name: 'Margherita Pizza', quantity: 1 }
  ]);

  const addItemHandler = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const contextValue = {
    items: cartItems,
    addItem: addItemHandler
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
