const utils = require('../utils.cjs');
const assert = require('node:assert/strict');

const func = utils.getAmountOfMonthBetweenDates;

const d11 = new Date('2025-12-11');
const d12 = new Date('2025-12-10');
assert.equal(func(d11, d12), 0);

const d21 = new Date('2025-12-11');
const d22 = new Date('2025-12-11');
assert.equal(func(d21, d22), 0);

const d31 = new Date('2025-12-10');
const d32 = new Date('2025-12-11');
assert.equal(func(d31, d32), 0);

const d41 = new Date('2025-11-10');
const d42 = new Date('2025-12-10');
assert.equal(func(d41, d42), 1);

const d51 = new Date('2025-11-10');
const d52 = new Date('2025-12-09');
assert.equal(func(d51, d52), 0);

const d61 = new Date('2025-11-10');
const d62 = new Date('2026-11-09');
assert.equal(func(d61, d62), 11);

const d71 = new Date('2025-11-10');
const d72 = new Date('2026-11-10');
assert.equal(func(d71, d72), 12);

const d81 = new Date('2025-05-12');
const d82 = new Date('2040-01-01');
assert.equal(func(d81, d82), 175);

const d91 = new Date('2040-01-01');
const d92 = new Date('2055-01-01');
assert.equal(func(d91, d92), 180);

console.log('\x1b[32m', 'getMonthTest successfully passed \n', '\x1b[0m');
