/* eslint-disable react/prop-types */
import { FormatMoney } from 'format-money-js';

function CompletedResults({ monthlyRepayment, term, currency }) {
  const fm = new FormatMoney({
    decimals: 2,
    symbol: currency,
  });

  const totalRepayment = fm.from(monthlyRepayment * 12 * term);
  const formattedMonthlyPayment = fm.from(monthlyRepayment);

  return (
    <>
      <h2>Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <h3>Your monthly repayments </h3>
      <span className="monthly-repayment">{formattedMonthlyPayment}</span>
      <h3>Total you will repay over the term </h3>
      <span className="total-repayment">{totalRepayment}</span>
    </>
  );
}

export default CompletedResults;
