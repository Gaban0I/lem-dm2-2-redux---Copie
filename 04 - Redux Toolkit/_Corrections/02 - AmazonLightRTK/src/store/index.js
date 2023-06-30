import { configureStore } from '@reduxjs/toolkit';

import ui from '../features/ui';
import user from '../features/user';
import basket from '../features/basket';

export const store = configureStore({
  reducer: {
    ui,
    user,
    basket,
  },
});
