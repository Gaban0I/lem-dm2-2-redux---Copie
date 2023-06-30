import { SET_USER } from '../actions/users';

const initialState = {
  firstname: 'Jean-Marie',
  lastname: 'CLERY',
  email: 'hello@jmclery.dev',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
