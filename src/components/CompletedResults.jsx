/* eslint-disable react/prop-types */
function CompletedResults({ monthlyRepayment }) {
  const totalRepayment = monthlyRepayment * 12;
  return (
    <>
      <h2>Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <h3>Your monthly repayments </h3>
      <span className="monthly-repayment">${monthlyRepayment.toFixed(2)}</span>
      <h3>Total you'll repay over the term </h3>
      <span className="total-repayment">${totalRepayment.toFixed(2)}</span>
    </>
  );
}

export default CompletedResults;
