const IsValidInput = require(`./IsValidInput`)
const findAmount = require(`./findAmount`)
const findTerm = require(`./findTerm`)
const findInterestRate = require(`./findInterestRate`)
const findInstallment = require(`./findInstallment`)
const main = (amount, term, interestRate, installment) => {
  if (!(IsValidInput(amount, term, interestRate, installment))) {
    return `error`;
  }
  if (typeof amount == `undefined`) {
    return findAmount(term,interestRate,installment)
  } 
  else if (typeof term == `undefined`) {
    return findTerm(amount, interestRate, installment); 
  } else if (typeof interestRate == `undefined`) {
    return findInterestRate(amount, term, installment); 
  } else if (typeof installment == `undefined`) {
    return findInstallment(amount, term, interestRate); 
  } else {
    return `err`
  }
};

// console.log(main(500000, undefined, 0.0239, 2300));
// console.log(main(undefined, 286, 0.0239, 2300));

// console.log(main(500000, 286, undefined, 2300));
// console.log(main(500000, 286, 0.0239, undefined));
// console.log(main(undefined, 12, 0.05, 1000));
module.exports = main