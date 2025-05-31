const utils = require('./utils.cjs');
const consts = require('./const.cjs');
const getForHowManyMonthWillBeEnoughMoney = require('./getForHowManyMonthWillBeEnoughMoney.cjs');

function getContriburtion(data) {
  const monthOfPayout = utils.getAmountOfMonthBetweenDates(data.dateOfRetirement, data.dateOfFinish);
  
  let minContribution = 0;
  let maxContribution = consts.MAX_CONTRIBUTION;
  while (minContribution < maxContribution) {
    const averageSum = Math.round((minContribution + maxContribution) / 2);
    const curMounthOfPayout = getForHowManyMonthWillBeEnoughMoney(data, averageSum);
  
    if (curMounthOfPayout > monthOfPayout) {
      maxContribution = averageSum;
    } else {
      minContribution = averageSum;
    }
    if (curMounthOfPayout - monthOfPayout === 0 || curMounthOfPayout - monthOfPayout === 1) {
      break;
    }
  }
  
  return minContribution / 100;
}

module.exports = getContriburtion;
