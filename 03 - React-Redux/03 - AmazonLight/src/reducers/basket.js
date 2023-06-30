import { ADD_ITEM, CLEAR_BASKET, REMOVE_ITEM } from '../actions/basket';

const initialState = []; // Panier vide

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      const existingItem = state.find((item) => item.product.id === action.payload.product.id);
      if (existingItem) {
        const updatedItem = { ...existingItem };
        updatedItem.quantity += action.payload.quantity;
        return state.map((item) => (item.id === updatedItem.id ? updatedItem : item));
      }

      return [...state, action.payload];

    case CLEAR_BASKET:
      return [];

    case REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}
