'use strict';

module.exports = crc32;

/**
 * @param {Array<number[]>} table Lookup table.
 * @param {Buffer} buf
 * @param {number} input Source CRC code.
 * @param {number} offset
 * @returns {number}
 */
function crc32(table, buf, input, offset) {
  let crc = input;

  for (let index = offset; index < buf.length; index += 1) {
    const byte = buf[index];
    crc = table[0][(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }

  return crc;
}
