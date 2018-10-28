'use strict';

const crc = require('crc/lib/crc32');
const crc32 = require('../crc32');

const testbuf = Buffer.allocUnsafe(1024 * 4);

console.time('crc');
for (let i = 0; i < 1e5; ++i) {
  crc(testbuf);
}
console.timeEnd('crc');

console.time('turbo-crc32');
for (let i = 0; i < 1e5; ++i) {
  crc32(testbuf);
}
console.timeEnd('turbo-crc32');
