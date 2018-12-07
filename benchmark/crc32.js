'use strict';

const crc = require('crc/lib/crc32');
const bcrc32 = require('buffer-crc32');
const crc32 = require('../crc32');

const testbuf = Buffer.allocUnsafe(1024 * 4);

console.time('crc');
for (let i = 0; i < 1e5; ++i) {
  crc(testbuf);
}
console.timeEnd('crc');

console.time('buffer-crc32');
for (let i = 0; i < 1e5; ++i) {
  bcrc32(testbuf);
}
console.timeEnd('buffer-crc32');

console.time('turbo-crc32');
for (let i = 0; i < 1e5; ++i) {
  crc32(testbuf);
}
console.timeEnd('turbo-crc32');
