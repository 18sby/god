## What is God?

God is a global target, you can set some data to it, to resolve that vue3 don't have the global Vue.

## Installation

### Node.js

    $ npm install god

## Module
    umd

## Usage

```js
import { give, ask, clean } from 'god';

// for example: set axios instance to god

// give one time at a file with js
let instance = axios.createInstance();
give('axios', instance, { readonly: true });

// use Infinity times at any file with js
let axiosInstance = ask('axios');
axiosInstance.get('http://example.com/getData').then(..)

// when you couldn't use some keys, clean it.
clean('axios');
ask('axios'); // null
```

## Api
```js
import god from 'god';

// 1. set
god.give(key: string, value: any, options?: { readonly?: boolean });
// readonly default is false, when you set readonly as true, the key is can't be cleaned

// 2. get
god.ask(key: string) // return (value: any | null)

// 3. remove
god.clean(key: string)

```