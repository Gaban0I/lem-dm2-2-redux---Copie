import { combineReducers, legacy_createStore as createStore } from 'redux';

import interfaceReducer from '../reducers/interface';
import userReducer from '../reducers/users';
import basketReducer from '../reducers/basket';

import { HYDRATE } from '../actions';

const rootReducer = combineReducers({
  interface: interfaceReducer,
  user: userReducer,
  basket: basketReducer,
});

const mainReducer = (state = {}, action) => {
  // prettier-ignore
  return (action.type === HYDRATE)
    ? action.payload
    : rootReducer(state, action);
};

const store = createStore(
  mainReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
