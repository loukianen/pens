const assert = require('node:assert/strict');
const fs = require('fs');

function readData(fileName) {
  const content = fs.readFileSync(fileName, 'utf-8');
  return content.trim().split('\n').map((str) => str.split('/')).map(([d,]) => d.trim());
}

function splitTheDate(date) {
  if (!(date instanceof Date)) {
    throw new Error('In splitTheDate recieved invalid Date');
  }
  return {
    day: date.getDate(),
    mounth: date.getMonth(),
    year: date.getFullYear(),
  }
}

function getAmountOfMounthBetweenDates(date1, date2) { // високосный год не учитывается
  const first = splitTheDate(date1);
  const second = splitTheDate(date2);

  if ((date1 >= date2)) {
    return 0;
  }

  let mounth = 0;
  let years = 0;

  if (second.day < first.day) {
    mounth -= 1;
  }

  if (second.mounth < first.mounth) {
    mounth += second.mounth;
    mounth += 12 - first.mounth;
    years -= 1;
  } else {
    mounth += second.mounth - first.mounth;
  }

  years += second.year - first.year;

  return years * 12 + mounth;
}

/* Tests
const d11 = new Date('2025-12-11');
const d12 = new Date('2025-12-10');
assert.equal(getAmountOfMounthBetweenDates(d11, d12), 0);

const d21 = new Date('2025-12-11');
const d22 = new Date('2025-12-11');
assert.equal(getAmountOfMounthBetweenDates(d21, d22), 0);

const d31 = new Date('2025-12-10');
const d32 = new Date('2025-12-11');
assert.equal(getAmountOfMounthBetweenDates(d31, d32), 0);

const d41 = new Date('2025-11-10');
const d42 = new Date('2025-12-10');
assert.equal(getAmountOfMounthBetweenDates(d41, d42), 1);

const d51 = new Date('2025-11-10');
const d52 = new Date('2025-12-09');
assert.equal(getAmountOfMounthBetweenDates(d51, d52), 0);

const d61 = new Date('2025-11-10');
const d62 = new Date('2026-11-09');
assert.equal(getAmountOfMounthBetweenDates(d61, d62), 11);

const d71 = new Date('2025-11-10');
const d72 = new Date('2026-11-10');
assert.equal(getAmountOfMounthBetweenDates(d71, d72), 12);

const d81 = new Date('2025-05-12');
const d82 = new Date('2040-01-01');
assert.equal(getAmountOfMounthBetweenDates(d81, d82), 175);

const d91 = new Date('2040-01-01');
const d92 = new Date('2055-01-01');
assert.equal(getAmountOfMounthBetweenDates(d91, d92), 180);
*/

function getNormalisedData(data) {
  return {
    startSum: Number(data[0]),
    sumToGet: Number(data[1]),
    inflationRate: Number(data[5] / 100),
    portfelGrowthRate: Number(data[6] / 100),
    conservativePortfelGrowthRate: Number(data[7] / 100),
    dateOfCalc: new Date(data[2]),
    dateOfRetirement: new Date(data[3]),
    dateOfFinish: new Date(data[4]),
  }
}

const utils = {
  getAmountOfMounthBetweenDates: getAmountOfMounthBetweenDates,
  getNormalisedData: getNormalisedData,
  readData: readData,
};

module.exports = utils;