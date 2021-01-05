import { State, Options, InitOptions, ReadonlyKeys } from '../typings/state';

let state: State = {}

let readonlyKeys: ReadonlyKeys = {}

let defaultOptions: Options = { // 设置值的
  readonly: false, // 只读属性不可清除和修改
}

let defaultInitOptions: InitOptions = {
  usePreviousPersistCache: false
}

export {
  state,
  defaultOptions,
  defaultInitOptions,
  readonlyKeys
}