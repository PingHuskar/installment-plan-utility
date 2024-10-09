const IsValidInput = (amount, term, interestRate, installment) => {
  const arr = [];
  arr.push(typeof amount);
  arr.push(typeof term);
  arr.push(typeof interestRate);
  arr.push(typeof installment);
  return arr.filter((t) => t == `number`).length == 3 && arr.includes(`undefined`)
};

module.exports = IsValidInput