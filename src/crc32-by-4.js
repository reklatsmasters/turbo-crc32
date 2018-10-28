'use strict';

const crc32By1 = require('./crc32-by-1');

module.exports = crc32;

/**
 * @private
 * @param {Array<number[]>} table Lookup table.
 * @param {Buffer} buf Source data.
 * @param {number} input
 * @param {number} offset
 * @returns {number}
 */
function crc32(table, buf, input, offset) {
  let pointer = offset;
  let crc = input;

  for (let i = pointer; i + 4 < buf.length; i += 4) {
    const byte = buf.readUInt32LE(i) ^ crc;

    crc =
      table[0][(byte >>> 24) & 0xff] ^
      table[1][(byte >>> 16) & 0xff] ^
      table[2][(byte >>> 8) & 0xff] ^
      table[3][byte & 0xff];
    pointer += 4;
  }

  return crc32By1(table, buf, crc, pointer);
}
