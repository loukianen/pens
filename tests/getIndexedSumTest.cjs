const utils = require('../utils.cjs');
const assert = require('node:assert/strict');

const func = utils.getIndexedSum;

const data = [
  { sum: 1000, index: 0, period: 0, result: 1000 },
  { sum: 1000, index: 0, period: 1, result: 1000 },
  { sum: 0, index: 0, period: 1, result: 0 },
  { sum: 1000, index: 1, period: 2, result: 4000 },
  { sum: 1000, index: 0.1, period: 3, result: 1331 },
  { sum: 1000, index: 0.33, period: 2, result: 1768 },
];

data.forEach(({sum, index, period, result}) => assert.equal(func(sum, index, period), result));

console.log('\x1b[32m', 'getIndexedSumTest successfully passed \n', '\x1b[0m');
