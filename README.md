# neutrino-middleware-source-map

[![NPM version](https://img.shields.io/npm/v/neutrino-middleware-source-map.svg?style=flat)](https://npmjs.com/package/neutrino-middleware-source-map) [![NPM downloads](https://img.shields.io/npm/dm/neutrino-middleware-source-map.svg?style=flat)](https://npmjs.com/package/neutrino-middleware-source-map) [![CircleCI](https://circleci.com/gh/zcong1993/neutrino-middleware-source-map/tree/master.svg?style=shield)](https://circleci.com/gh/zcong1993/neutrino-middleware-source-map/tree/master)

> `neutrino-middleware-source-map` is Neutrino middleware for supporting sourceMap
>
> fork from [poi](https://github.com/egoist/poi)

## Requirements

- Node.js v6.10+
- Yarn or npm client
- Neutrino v6

## Install

```bash
# yarn
$ yarn add neutrino-middleware-source-map
# npm
$ npm install --save neutrino-middleware-source-map
```

## Usage

`neutrino-middleware-source-map` can be consumed from the Neutrino API, middleware, or presets. Require this package and plug it into Neutrino:

```js
// Using function middleware format
const sourceMap = require('neutrino-middleware-source-map')

// Use with default options
neutrino.use(sourceMap)

// Usage showing overriding minification options
neutrino.use(sourceMap, {
  sourceMap: true
})
// Using object or array middleware format

// Use with default options
module.exports = {
  use: ['neutrino-middleware-source-map']
}

// Usage showing overriding minification options
module.exports = {
  use: [
    ['neutrino-middleware-source-map', {
      sourceMap: true
    }]
  ]
}
```

## Options

### sourceMap

Type: `string` `boolean`

Default: `true`

By default, it use `eval-source-map` in `development` mode, use `inline-source-map` in `test` mode, and use `source-map` in `production` mode.

When give a `string` value, will use it in all modes.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**neutrino-middleware-source-map** © [zcong1993](https://github.com/zcong1993), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by zcong1993 with help from contributors ([list](https://github.com/zcong1993/neutrino-middleware-source-map/contributors)).

> [github.com/zcong1993](https://github.com/zcong1993) · GitHub [@zcong1993](https://github.com/zcong1993)
