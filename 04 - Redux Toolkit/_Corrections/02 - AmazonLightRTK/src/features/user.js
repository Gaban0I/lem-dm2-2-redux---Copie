import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  // Nom de la slice
  name: 'user',

  // State par défaut
  initialState: {
    firstname: 'Jean-Marie',
    lastname: 'CLERY',
    email: 'jmclery@gmail.com',
  },

  // Fonctions de reduction (enveloppés dans Immer.js)
  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

// Export des Action Creators
export const { setUser } = user.actions;

// Export du Reducer
export default user.reducer;
