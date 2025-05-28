const utils = require('./utils.cjs');
const getForHowManyMonthWillBeEnoughMoney = require('./getForHowManyMonthWillBeEnoughMoney.cjs');
const searchInvalidData = require('./searchInvalidData.cjs');

const nData = utils.getNormalisedData(utils.readData('input.txt'));

const invalidData = searchInvalidData(nData);
if (invalidData) {
  console.log('\x1b[31m');
  throw new Error(invalidData);
}

// const monthOfPayout = utils.getAmountOfMonthBetweenDates(nData.dateOfRetirement, nData.dateOfFinish);
// let curMounthOfPayout = getForHowManyMonthWillBeEnoughMoney(nData, 700000);
// console.log(curMounthOfPayout, monthOfPayout);
/*
let minContribution = 0;
let maxContribution = Number.MAX_SAFE_INTEGER;
while (minSumPayout < maxSumPayout) {
  const averageSum = Math.round((minSumPayout + maxSumPayout) / 2);
  console.log('averageSum: ', averageSum);
  curMounthOfPayout = getForHowManyMonthWillBeEnoughMoney(nData, averageSum);
  console.log('curMounthOfPayout: ', curMounthOfPayout);
  if (curMounthOfPayout > monthOfPayout) {
    minSumPayout = averageSum;
  } else {
    maxSumPayout = averageSum;
  }
  // minSumPayout = maxSumPayout;
}

console.log(`Inputing conditions will permit recieve en equal ${minSumPayout / 100} until ${nData.dateOfFinish.toLocaleDateString()}`);
return minSumPayout / 100;
*/
// const month = getForHowManyMonthWillBeEnoughMoney(nData, 700000);
// console.log(`Money will be enough for ${monthOfPayout} month`);
