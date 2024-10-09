const ip = require(`installment-plan`)
const findTerm = (amount, interestRate, installment) => {
  let term;
  const PaymentAmount = [
    { from: 1, to: 12, installment, IntRate: interestRate },
    { from: 13, to: 24, installment, IntRate: interestRate },
    { from: 25, to: 36, installment, IntRate: interestRate },
    { from: 37, to: 999, installment, IntRate: interestRate },
  ];
  term = ip.CalculateInstallmentPlan_DE(amount, PaymentAmount).length;
  return term;
};

module.exports = findTerm;
