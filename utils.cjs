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