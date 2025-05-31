const getContriburtion = require('./getContribution.cjs');
const searchInvalidData = require('./searchInvalidData.cjs');
const utils = require('./utils.cjs');

const nData = utils.getNormalisedData(utils.readData('input.txt'));

const invalidData = searchInvalidData(nData);
if (invalidData) {
  console.log('\x1b[31m');
  throw new Error(invalidData);
}

const contribution = getContriburtion(nData);

const contributionText = utils.formatSum(contribution);
const payoutText = utils.formatSum(nData.sumToGet / 100);
const yearOfCalcText = nData.dateOfCalc.getFullYear();
const dateOfRetirement = nData.dateOfRetirement.toLocaleDateString('ru-RU');
const dateOfFinish = nData.dateOfFinish.toLocaleDateString('ru-RU');

console.log('\x1b[33m', '\n');
console.log(`For receive every month from ${dateOfRetirement} until ${dateOfFinish} sum which was equal ${payoutText} at ${yearOfCalcText}
you should make every month contribution ${contributionText}`);
console.log('\n', '\x1b[0m');
