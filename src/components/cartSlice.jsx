import { createSlice } from "@reduxjs/toolkit";

// Helper function to get the cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage", error);
    return [];
  }
};

// Helper function to save the cart to localStorage
const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  } catch (error) {
    console.error("Error saving cart to localStorage", error);
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromLocalStorage(), // Initialize the cart from localStorage
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      saveCartToLocalStorage(state.items); // Save the updated cart to localStorage
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      saveCartToLocalStorage(state.items); // Save the updated cart to localStorage
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items); // Clear the cart in localStorage
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
