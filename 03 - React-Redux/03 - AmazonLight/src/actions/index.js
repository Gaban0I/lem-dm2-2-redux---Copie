// Action Type
export const HYDRATE = 'Hydratation du store';

// Action Creator pour hydrater le store complet
export function hydrate(payload) {
  return { type: HYDRATE, payload };
}
