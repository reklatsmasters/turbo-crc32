# turbo-crc32

[![Build Status](https://travis-ci.com/reklatsmasters/turbo-crc32.svg?branch=master)](https://travis-ci.com/reklatsmasters/turbo-crc32)
[![npm](https://img.shields.io/npm/v/turbo-crc32.svg)](https://npmjs.org/package/turbo-crc32)
[![node](https://img.shields.io/node/v/turbo-crc32.svg)](https://npmjs.org/package/turbo-crc32)
[![license](https://img.shields.io/npm/l/turbo-crc32.svg)](https://npmjs.org/package/turbo-crc32)
[![downloads](https://img.shields.io/npm/dm/turbo-crc32.svg)](https://npmjs.org/package/turbo-crc32)
[![Coverage Status](https://coveralls.io/repos/github/reklatsmasters/turbo-crc32/badge.svg?branch=master)](https://coveralls.io/github/reklatsmasters/turbo-crc32?branch=master)

CRC32 generation using Slicing-by-N algorithm. CRC32 and CRC32C algorithms are supported.

### Support

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png)](https://www.buymeacoffee.com/reklatsmasters)


## Usage

```js
const crc32 = require('turbo-crc32/crc32');
const crc32c = require('turbo-crc32/crc32c');

crc32('123456789')  // 0xcbf43926
crc32c('123456789') // 0xe3069283

// if you want signed integer
crc32('123456789') >> 0 // -873187034
```

## API

* **`crc32(input: Buffer|String): Number`**
* **`crc32c(input: Buffer|String): Number`**

## Benchmark

*nodejs 10.14.1 / Ubuntu 16.04 x64*

```
buffer-crc32:   1387.205ms
crc:            987.866ms
turbo-crc32:    447.711ms
```

## License

MIT, 2018 (c) Dmitriy Tsvettsikh
