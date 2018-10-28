'use strict';

const { createSlicedTable } = require('./src/create-table');
const crc32By8 = require('./src/crc32-by-8');

const CRC32C_LOOKUP = createSlicedTable(0x82f63b78);

module.exports = crc32c;

/**
 * Compute CRC32C using slicing-by-n algorithm.
 * @param {Buffer|string} source
 * @returns {number}
 */
function crc32c(source) {
  const buf = Buffer.isBuffer(source) ? source : Buffer.from(source);

  return (crc32By8(CRC32C_LOOKUP, buf, 0xffffffff, 0) ^ 0xffffffff) >>> 0;
}
