import { Options } from '../typings/state';
import { defaultOptions, state, readonlyKeys } from './state';

function give(key: string, value: any, opts: Options = defaultOptions) {
  if (readonlyKeys[key]) {
    return console.warn(`not allowed, ${key} is defined that was readonly, please don't set again!`);
  }
  initValue(key, value, opts);
  readonlyKeys[key] = true;
}

function initValue(key: string, value: any, opts: Options) {
  let oldValue = value;
  Object.defineProperty(state, key, {
    configurable: true,
    enumerable: true,
    get() {
      return oldValue;
    },
    set(newValue) {
      if (oldValue === newValue) return ;
      if (readonlyKeys[key]) {
        return console.warn(`not allowed, ${key} is defined that was readonly, please don't set again!`);
      }
      oldValue = newValue;
    }
  })
}

export {
  give
}