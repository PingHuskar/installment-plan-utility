const ip = require(`installment-plan`);

const findInterestRate = (amount, term, installment) => {
  let interestRate = 0.7;
  while (true) {
    const PaymentAmount = [
      { from: 1, to: 12, installment, IntRate: interestRate },
      { from: 13, to: 24, installment, IntRate: interestRate },
      { from: 25, to: 36, installment, IntRate: interestRate },
      { from: 37, to: term, installment, IntRate: interestRate },
    ];
    const plan = ip.CalculateInstallmentPlan_DE(amount, PaymentAmount);
    if (plan.length > term || plan.at(-1).PA > installment) {
      interestRate = interestRate - 0.001;
      //   console.log(interestRate, plan.at(-1).PA,installment);
    } else {
      break;
    }
  }
  return interestRate.toFixed(4);
};

module.exports = findInterestRate;
