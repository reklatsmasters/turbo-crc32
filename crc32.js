'use strict';

const { createSlicedTable } = require('./src/create-table');
const crc32By8 = require('./src/crc32-by-8');

const CRC32_LOOKUP = createSlicedTable(0xedb88320);

module.exports = crc32;

/**
 * Compute CRC32 using slicing-by-n algorithm.
 * @param {Buffer|string} source
 * @returns {number}
 */
function crc32(source) {
  const buf = Buffer.isBuffer(source) ? source : Buffer.from(source);

  return (crc32By8(CRC32_LOOKUP, buf, 0xffffffff, 0) ^ 0xffffffff) >>> 0;
}
