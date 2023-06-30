export const ADD_ITEM = 'Ajout au panier';
export const REMOVE_ITEM = 'Suppression du panier';
export const CLEAR_BASKET = 'Vidage du panier';

export function addToBasket(payload) {
  return { type: ADD_ITEM, payload };
}
export function removeFromBasket(payload) {
  return { type: REMOVE_ITEM, payload };
}
export function clearBasket() {
  return { type: CLEAR_BASKET };
}
