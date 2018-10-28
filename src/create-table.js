'use strict';

module.exports = {
  createTable,
  createSlicedTable,
};

/**
 * Create classic lookup table for provided CRC polynom.
 * @param {number} polynom
 * @returns {number[]}
 */
function createTable(polynom) {
  const table = new Uint32Array(256);

  for (let i = 0; i < table.length; i += 1) {
    let crc = i;

    for (let j = 0; j < 8; j += 1) {
      // eslint-disable-next-line no-bitwise
      crc = crc & 1 ? (crc >>> 1) ^ polynom : crc >>> 1;
    }

    table[i] = crc;
  }

  return table;
}

/**
 * Create lookup table for Slicing By N algorithm.
 * @param {number} polynom
 * @returns {Array<number[]>}
 */
function createSlicedTable(polynom) {
  const lookup = new Array(8);
  const table = createTable(polynom);

  lookup[0] = table;

  for (let slice = 1; slice < lookup.length; slice += 1) {
    lookup[slice] = new Uint32Array(256);

    for (let i = 0; i < 256; i += 1) {
      lookup[slice][i] =
        // eslint-disable-next-line no-bitwise
        (lookup[slice - 1][i] >>> 8) ^ lookup[0][lookup[slice - 1][i] & 0xff];
    }
  }

  return lookup;
}
