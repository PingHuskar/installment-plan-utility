const ip = require(`installment-plan`);

const findAmount = (term, interestRate, installment) => {
  let amt = installment * term;
  const PaymentAmount = [
    { from: 1, to: 12, installment, IntRate: interestRate },
    { from: 13, to: 24, installment, IntRate: interestRate },
    { from: 25, to: 36, installment, IntRate: interestRate },
    { from: 37, to: term, installment, IntRate: interestRate },
  ];
  while (true) {
    const plan = ip.CalculateInstallmentPlan_DE(amt, PaymentAmount)
    //   DP - DeductPrincipal;
    if (plan.at(-1).DP > installment) {
        amt = amt * 0.995
    } else {
        break
    }
  }
    return Math.round(amt);
};

module.exports = findAmount;
