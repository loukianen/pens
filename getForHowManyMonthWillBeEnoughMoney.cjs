const utils = require('./utils.cjs');

function getForHowManyMonthWillBeEnoughMoney(inputData, additionalContribution) {
  let capital = inputData.startSum;
  let contribution = additionalContribution;
  const monthToRetairment = utils.getAmountOfMonthBetweenDates(inputData.dateOfCalc, inputData.dateOfRetirement)
  let payout = utils.getIndexedSum(inputData.sumToGet, inputData.inflationRate, Math.floor( monthToRetairment / 12));
  
  let curMounth = inputData.dateOfCalc.getMonth() === 11 ? 0 : inputData.dateOfCalc.getMonth() + 1;
  let passedMonth = 0;

  // while (passedMonth < monthToRetairment) {
  //   capital += additionalContribution;
  //   if (curMounth === 11) {
  //     const curMounthToRetairment = monthToRetairment - passedMonth;
  //     capital = utils.getIndexedSum(capital, )
  //   }
  // }
  return payout;
}

module.exports = getForHowManyMonthWillBeEnoughMoney;