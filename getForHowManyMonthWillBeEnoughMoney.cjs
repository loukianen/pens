const utils = require('./utils.cjs');

function getForHowManyMonthWillBeEnoughMoney(inputData, additionalContribution) {
  let capital = inputData.startSum;
  let contribution = additionalContribution;
  const monthToRetairment = utils.getAmountOfMonthBetweenDates(inputData.dateOfCalc, inputData.dateOfRetirement) - 1;
  let payout = utils.getIndexedSum(inputData.sumToGet, inputData.inflationRate, Math.floor( monthToRetairment / 12));
  
  let curMounth = inputData.dateOfCalc.getMonth() === 11 ? 0 : inputData.dateOfCalc.getMonth() + 1;
  let passedMonth = 0;
  let capitalInCurYearGrows = 0

  while (passedMonth < monthToRetairment) {
    capital += contribution;
    capitalInCurYearGrows += capital;
    passedMonth += 1;
    curMounth = curMounth === 11 ? 0 : curMounth + 1;
    if (curMounth === 11) {
      const averageRate = utils.getAverageRate(inputData, monthToRetairment - passedMonth);
      const incom  = Math.round(capitalInCurYearGrows / 12 * averageRate);
      capital += incom;
      contribution = utils.getIndexedSum(contribution, inputData.inflationRate, 1);
      capitalInCurYearGrows = 0;
    }
  }
  // console.log('passedMonth: ', passedMonth, ': ', 'capital: ', capital, ', contribution: ', contribution);
  // console.log('Retairment!!!');

  let passedMonthOfPayout = 0;
  const monthToStopPayout = utils.getAmountOfMonthBetweenDates(inputData.dateOfRetirement, inputData.dateOfFinish);
  while (payout <= capital) {
    if (passedMonthOfPayout >= monthToStopPayout) {
      return monthToStopPayout;
    }
    passedMonthOfPayout += 1;
    capital -= payout;
    capitalInCurYearGrows += capital;
    curMounth = curMounth === 11 ? 0 : curMounth + 1;
    if (curMounth === 11) {
      const incom  = Math.round(capitalInCurYearGrows / 12 * inputData.conservativePortfelGrowthRate);
      capital += incom;
      payout = utils.getIndexedSum(payout, inputData.inflationRate, 1);
      capitalInCurYearGrows = 0;
      // console.log('passedMonthOfPayout: ', passedMonthOfPayout, 'capital: ', capital, 'payout: ', payout);
    }
  }
  return passedMonthOfPayout;
}

module.exports = getForHowManyMonthWillBeEnoughMoney;