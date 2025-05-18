const utils = require('./utils.cjs');

const nData = utils.getNormalisedData(utils.readData('input.txt'));
const month = utils.forHowManyMonthWillBeEnoughMoney(nData)
console.log(`Money will be enough for ${month} month`);
