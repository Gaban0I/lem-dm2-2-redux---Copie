export const SET_USER = "Modification de l'utilisateur";

export function setUser(payload) {
  return { type: SET_USER, payload };
}
