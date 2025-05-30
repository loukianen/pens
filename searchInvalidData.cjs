const consts = require('./const.cjs');

const commonText = 'Please, check your data!\nThe app have limits for input data:\n  -';
const textAboutStartSum = 'Start sum: $$$. It should not be smaller zero';
const textAboutSumToGet = 'Payout sum: $$$. It should be 0 < sum < 10 000 000';
const textAboutInflation = 'Inflation rate: $$$. It should be -1000 < rate < 1000';
const textAboutGrowRate = 'Portfel growth rate: $$$. It should be -1000 < rate < 1000';
const textAboutConservativeRate = 'Conservative growth rate: $$$. It should be -1000 < rate < 1000';
const textAboutActivePeriod = 'A difference between year of retirement and year of calc: $$$. It should be 0 < period < 100';
const textAboutPayoutPeriod = 'A difference between year of finish and of year retirement: $$$. It should be 0 < period < 100';


function searchInvalidData(data) {
  const {
    startSum,
    sumToGet,
    inflationRate,
    portfelGrowthRate,
    conservativePortfelGrowthRate,
    dateOfCalc,
    dateOfRetirement,
    dateOfFinish,
  } = data;

  const errorsTextArr = [];

  if (startSum < 0) {
    const errorText = makeErrorText(textAboutStartSum, startSum / 100);
    errorsTextArr.push(errorText);
  }

  if (sumToGet < 0 || sumToGet > consts.MAX_CONTRIBUTION) {
    const errorText = makeErrorText(textAboutSumToGet, sumToGet / 100);
    errorsTextArr.push(errorText);
  }

  if (inflationRate < -1 * consts.MAX_RATE || inflationRate > consts.MAX_RATE) {
    const errorText = makeErrorText(textAboutInflation, inflationRate * 100);
    errorsTextArr.push(errorText);
  }
  
  if (portfelGrowthRate < -1 * consts.MAX_RATE || portfelGrowthRate > consts.MAX_RATE) {
    const errorText = makeErrorText(textAboutGrowRate, portfelGrowthRate * 100);
    errorsTextArr.push(errorText);
  }
  
  if (conservativePortfelGrowthRate < -1 * consts.MAX_RATE || conservativePortfelGrowthRate > consts.MAX_RATE) {
    const errorText = makeErrorText(textAboutConservativeRate, conservativePortfelGrowthRate * 100);
    errorsTextArr.push(errorText);
  }

  const activePeriod = dateOfRetirement.getFullYear() - dateOfCalc.getFullYear()
  if ( activePeriod < 0 || activePeriod > consts.MAX_PERIOD) {
    const errorText = makeErrorText(textAboutActivePeriod, activePeriod);
    errorsTextArr.push(errorText);
  }

  const peyoutPeriod = dateOfFinish.getFullYear() - dateOfRetirement.getFullYear()
  if ( peyoutPeriod < 0 || peyoutPeriod > consts.MAX_PERIOD) {
    const errorText = makeErrorText(textAboutPayoutPeriod, peyoutPeriod);
    errorsTextArr.push(errorText);
  }

  if (errorsTextArr.length > 0) {
    return `${commonText} ${errorsTextArr.join('\n  - ')}\n\n`;
  } else {
    return false;
  }
}

function makeErrorText(text, data) {
  return text.replace('$$$', data.toString());
}

module.exports = searchInvalidData;
