// Action Type
export const SWITCH_THEME = 'Changement de thème';

// Action Creator pour changer de theme
export function switchMode() {
  return { type: SWITCH_THEME };
}
