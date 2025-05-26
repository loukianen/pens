const utils = require('../utils.cjs');
const assert = require('node:assert/strict');

const func = utils.getAverageSum;

const data = [
  { sum: 1000, addSum: 100 , iter: 0, result: 0 },
  { sum: 1000, addSum: 100 , iter: 1, result: 92 },
  { sum: 1000, addSum: 100 , iter: 12, result: 1650 },
  { sum: 1000, addSum: 0 , iter: 12, result: 1000 },
  { sum: 1000, addSum: 0 , iter: 6, result: 500 },
  { sum: 0, addSum: 100 , iter: 12, result: 650 },
];
data.forEach(({sum, addSum, iter, result}) => assert.equal(func(sum, addSum, iter), result));

console.log('\x1b[32m', 'getgetAverageSumTest successfully passed \n', '\x1b[0m');
