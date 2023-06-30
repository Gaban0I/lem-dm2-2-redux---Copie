import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ui = createSlice({
  // Nom de la slice
  name: 'ui',

  // State par défaut
  initialState: {
    mode: 'light',
    pending: false,
    contributions: 0,
  },

  // Fonctions de reduction (enveloppés dans Immer.js)
  reducers: {
    switchMode(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.pending = true;
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.pending = false;
        state.contributions++;
      })
      .addCase(addProduct.rejected, (state) => {
        state.pending = false;
      });
  },
});

// Export des Action Creators
export const { switchMode } = ui.actions;

// Exporte une Action asynchrone
export const addProduct = createAsyncThunk('ui/addProduct', async (payload) => {
  const response = await fetch('https://fakestoreapi.com/products/7', {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
  return response.json();
});

// Export du Reducer
export default ui.reducer;
