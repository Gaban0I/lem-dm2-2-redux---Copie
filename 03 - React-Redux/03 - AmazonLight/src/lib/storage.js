import { hydrate } from '../actions';
import store from '../store';

const STORAGE_KEY_PREFIX = 'amazon-like';

const storage = window.localStorage.getItem(`${STORAGE_KEY_PREFIX}:store`);
if (storage) {
  try {
    const state = JSON.parse(storage);
    store.dispatch(hydrate(state));
  } catch (error) {
    console.warn('Impossible de parser le contenu du panier stocké. Veuillez vider le Local Storage.', error);
  }
}

store.subscribe(() => {
  const serializedState = JSON.stringify(store.getState());
  window.localStorage.setItem(`${STORAGE_KEY_PREFIX}:store`, serializedState);
});
