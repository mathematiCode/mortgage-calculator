/* eslint-disable react/prop-types */
import { useState } from 'react';

function AmountInput({ amount, setAmount }) {
  const [amountStatus, setAmountStatus] = useState('inactive');

  function handleInput(event) {
    if (1000000000 > event.target.value > 0) {
      setAmount(event.target.value);
    } else {
      setAmountStatus('error');
    }
    setAmount(event.target.value);
  }
  return (
    <label htmlFor="mortgageAmount" className="label-on-top">
      Mortgage Amount
      <div className="amount-container" data-status={amountStatus}>
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
