import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
});

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const existingItemIndex = state.items.findIndex(
      (i) => i.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingItemIndex !== -1) {
      // Kui olemas, suurendame kogust
      const updatedItem = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // Kui pole veel olemas, lisame uue
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { items: updatedItems };
  }

  return state;
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  };

  const contextValue = {
    items: cartState.items,
    addItem: addItemHandler,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
