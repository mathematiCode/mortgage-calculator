/* eslint-disable react/prop-types */

function AmountInput({ amount, setAmount, status, setStatus }) {
  function handleInput(event) {
    if (event.target.value >= 0 && event.target.value < 100000000000) {
      setStatus('normal');
      setAmount(event.target.value);
    } else {
      setStatus('error');
      setAmount(event.target.value);
      console.log(status);
    }
  }
  return (
    <label htmlFor="mortgageAmount" className="label-on-top">
      Mortgage Amount
      <div className="amount-container" data-status={status}>
        <div className="front-unit">$</div>
        <input
          type="number"
          id="mortgageAmount"
          value={amount}
          onChange={event => handleInput(event)}
        />
      </div>
    </label>
  );
}

export default AmountInput;
