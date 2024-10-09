const ip = require(`installment-plan`);

const findInstallment = (amount, term, interestRate) => {
  let installment = 1000;
  while (true) {
    const PaymentAmount = [
      { from: 1, to: 12, installment, IntRate: interestRate },
      { from: 13, to: 24, installment, IntRate: interestRate },
      { from: 25, to: 36, installment, IntRate: interestRate },
      { from: 37, to: term, installment, IntRate: interestRate },
    ];
    const plan = ip.CalculateInstallmentPlan_DE(amount, PaymentAmount);
    if (plan.length > term || plan.at(-1).PA > installment) {
      installment = installment + 100;
    } else {
      break;
    }
  }
  return installment;
};

module.exports = findInstallment;
