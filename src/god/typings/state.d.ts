export interface Options {
  readonly: boolean;
}

export interface State {
  [key: string]: any
}

export interface InitOptions {
  usePreviousPersistCache?: boolean // 使用上一次长时的缓存状态
}

export interface ReadonlyKeys {
  [key: string]: boolean
}