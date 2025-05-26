const utils = require('./utils.cjs');
const getForHowManyMonthWillBeEnoughMoney = require('./getForHowManyMonthWillBeEnoughMoney.cjs');

const nData = utils.getNormalisedData(utils.readData('input.txt'));
const monthOfPayout = utils.getAmountOfMonthBetweenDates(nData.dateOfRetirement, nData.dateOfFinish);
let curMounthOfPayout = getForHowManyMonthWillBeEnoughMoney(nData, 700000);
console.log(curMounthOfPayout, monthOfPayout);

if (curMounthOfPayout >= monthOfPayout) {
  console.log(`Current conditions permit recieve every month from ${nData.dateOfRetirement.toLocaleDateString()} until ${nData.dateOfFinish.toLocaleDateString()} an indexed sum which was equal ${nData.sumToGet} in ${nData.dateOfCalc.getFullYear()}`);
  return nData.sumToGet / 100;
}

let minSumPayout = 0;
let maxSumPayout = nData.sumToGet;
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

// const month = getForHowManyMonthWillBeEnoughMoney(nData, 700000);
// console.log(`Money will be enough for ${monthOfPayout} month`);
