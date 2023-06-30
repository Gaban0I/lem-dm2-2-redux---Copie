import { createSlice } from '@reduxjs/toolkit';

const basket = createSlice({
  // Nom de la slice
  name: 'basket',

  // State par défaut
  initialState: [],

  // Fonctions de reduction (enveloppés dans Immer.js)
  reducers: {
    addItem(state, action) {
      const existingItem = state.find((item) => item.product.id === action.payload.product.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },

    removeItem(state, action) {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex > -1) {
        state.splice(itemIndex, 1);
      }
    },

    clearBasket(state) {
      state.length = 0;
    },
  },
});

// Export des Action Creators
export const { addItem, removeItem, clearBasket } = basket.actions;

// Export du Reducer
export default basket.reducer;
