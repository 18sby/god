import { state } from './state';

function clean(key: string) {
  if (state[key]) {
    state[key] = null;
  }
}

export {
  clean
}