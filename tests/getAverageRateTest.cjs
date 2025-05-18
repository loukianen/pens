const utils = require('../utils.cjs');
const assert = require('node:assert/strict');

const func = utils.getAverageRate;

const data = [
  { data: { portfelGrowthRate: 0, conservativePortfelGrowthRate: 0.08 }, month: 0, result: 0.08 },
  { data: { portfelGrowthRate: 100, conservativePortfelGrowthRate: 0 }, month: 0, result: 0 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 1, result: 0.019 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 12, result: 0.019 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 13, result: 0.028 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 24, result: 0.028 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 24, result: 0.028 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 25, result: 0.037 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 36, result: 0.037 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 37, result: 0.046 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 48, result: 0.046 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 49, result: 0.055 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 60, result: 0.055 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 61, result: 0.064 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 72, result: 0.064 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 73, result: 0.073 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 84, result: 0.073 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.01 }, month: 184, result: 0.073 },
  { data: { portfelGrowthRate: 0.1, conservativePortfelGrowthRate: 0.00 }, month: 184, result: 0.07 },
];

data.forEach(({data, month, result}) => assert.equal(Math.round(func(data, month) * 10000), Math.round(result * 10000)));

console.log('\x1b[32m', 'getgetAverageRateTest successfully passed \n', '\x1b[0m');
