const utils = require('./utils.cjs');
const getForHowManyMonthWillBeEnoughMoney = require('./getForHowManyMonthWillBeEnoughMoney.cjs');

const nData = utils.getNormalisedData(utils.readData('input.txt'));
const month = getForHowManyMonthWillBeEnoughMoney(nData) / 100;
console.log(`Money will be enough for ${month} month`);
