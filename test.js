'use strict';

const crc32 = require('./crc32');
const crc32c = require('./crc32c');

test('crc32', () => {
  expect(crc32('123456789')).toEqual(0xcbf43926);
  expect(crc32(Buffer.from('123456789'))).toEqual(0xcbf43926);
  expect(crc32('1234567812341')).toEqual(1430920591);
});

test('crc32c', () => {
  expect(crc32c('123456789')).toEqual(0xe3069283);
  expect(crc32c(Buffer.from('123456789'))).toEqual(0xe3069283);
});
