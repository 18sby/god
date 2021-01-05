(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.god = {}));
}(this, (function (exports) { 'use strict';

  let state = {};
  let readonlyKeys = {};
  let defaultOptions = {
      readonly: false,
  };

  function ask(key) {
      return state[key] || null;
  }

  function clean(key) {
      if (state[key]) {
          state[key] = null;
      }
  }

  function give(key, value, opts = defaultOptions) {
      if (readonlyKeys[key]) {
          return console.warn(`not allowed, ${key} is defined that was readonly, please don't set again!`);
      }
      initValue(key, value);
      readonlyKeys[key] = true;
  }
  function initValue(key, value, opts) {
      let oldValue = value;
      Object.defineProperty(state, key, {
          configurable: true,
          enumerable: true,
          get() {
              return oldValue;
          },
          set(newValue) {
              if (oldValue === newValue)
                  return;
              if (readonlyKeys[key]) {
                  return console.warn(`not allowed, ${key} is defined that was readonly, please don't set again!`);
              }
              oldValue = newValue;
          }
      });
  }

  exports.ask = ask;
  exports.clean = clean;
  exports.give = give;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
