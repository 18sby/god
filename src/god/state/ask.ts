import { state } from './state';

function ask(key: string) {
  return state[key] || null;
}

export {
  ask
}