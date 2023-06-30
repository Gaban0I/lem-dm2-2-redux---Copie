import { SWITCH_THEME } from '../actions/interface';

const initialState = {
  mode: 'light',
};

export default function interfaceReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return { ...state, mode: state.mode === 'light' ? 'dark' : 'light' };

    default:
      return state;
  }
}
