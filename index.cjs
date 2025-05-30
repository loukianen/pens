const utils = require('./utils.cjs');
const consts = require('./const.cjs');
const getForHowManyMonthWillBeEnoughMoney = require('./getForHowManyMonthWillBeEnoughMoney.cjs');
const searchInvalidData = require('./searchInvalidData.cjs');

const nData = utils.getNormalisedData(utils.readData('input.txt'));

const invalidData = searchInvalidData(nData);
if (invalidData) {
  console.log('\x1b[31m');
  throw new Error(invalidData);
}

const monthOfPayout = utils.getAmountOfMonthBetweenDates(nData.dateOfRetirement, nData.dateOfFinish);

let minContribution = 0;
let maxContribution = consts.MAX_CONTRIBUTION;
while (minContribution < maxContribution) {
  const averageSum = Math.round((minContribution + maxContribution) / 2);
  console.log('averageSum: ', averageSum);
  const curMounthOfPayout = getForHowManyMonthWillBeEnoughMoney(nData, averageSum);
  console.log('curMounthOfPayout: ', curMounthOfPayout, 'monthOfPayout: ', monthOfPayout);
  if (curMounthOfPayout > monthOfPayout) {
    maxContribution = averageSum;
  } else {
    minContribution = averageSum;
  }
  if (curMounthOfPayout - monthOfPayout === 0 || curMounthOfPayout - monthOfPayout === 1) {
    break;
  }
}

console.log('\x1b[33m', '\n');
console.log(`Current conditions will permit to recieve every month en equal ${(minContribution / 100).toLocaleString('ru-RU', { style: "currency", currency: "RUR" })}
until ${nData.dateOfFinish.toLocaleDateString()}`);
console.log('\n', '\x1b[0m');
return minContribution / 100;
