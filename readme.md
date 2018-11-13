# insert-fonts [![Build Status](https://travis-ci.org/bendrucker/insert-fonts.svg?branch=master)](https://travis-ci.org/bendrucker/insert-fonts) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/insert-fonts.svg)](https://greenkeeper.io/)

> Insert a set of fonts using base64 encoding and CSS font-face tags


## Install

```
$ npm install --save insert-fonts
```


## Usage

```js
var insertFonts = require('insert-fonts')

insertFonts({
  'Awesome Font Face': {
    400: '...' // base 64 encoded font data for the 400 weight
    500: '...' // base 64 encoded font data for the 500 weight
  },
  'Other Great Face': {
    400: '...'
  }
})
//=> creates fonts and inserts @font-face tags into the dom
```

## API

#### `insertFonts(fonts)` -> `string`

Returns the inserted CSS string.

##### fonts

*Required*  
Type: `object`

An object where the keys/values represent font face names and their weights, respectively. The weights are also objects, where the keys/values represent the weight and the font data (base 64 encoded), respectively.


## License

MIT © [Ben Drucker](http://bendrucker.me)
