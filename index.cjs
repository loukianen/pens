const utils = require('./utils.cjs');

const nData = utils.getNormalisedData(utils.readData('input.txt'));
console.log(nData.dateOfCalc, nData.dateOfRetirement);
console.log(utils.getAmountOfMounthBetweenDates(nData.dateOfCalc, nData.dateOfRetirement));
