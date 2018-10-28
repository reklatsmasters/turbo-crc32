'use strict';

const crc32By4 = require('./crc32-by-4');

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

  for (let i = pointer; i + 8 < buf.length; i += 8) {
    const byte1 = buf.readUInt32LE(i) ^ crc;
    const byte2 = buf.readUInt32LE(i + 4);

    crc =
      table[0][(byte2 >>> 24) & 0xff] ^
      table[1][(byte2 >>> 16) & 0xff] ^
      table[2][(byte2 >>> 8) & 0xff] ^
      table[3][byte2 & 0xff] ^
      table[4][(byte1 >>> 24) & 0xff] ^
      table[5][(byte1 >>> 16) & 0xff] ^
      table[6][(byte1 >>> 8) & 0xff] ^
      table[7][byte1 & 0xff];
    pointer += 8;
  }

  return crc32By4(table, buf, crc, pointer);
}
