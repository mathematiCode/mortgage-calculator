/* eslint-disable react/prop-types */

function InterestInput({ interestRate, setInterestRate, status, setStatus }) {
  function handleInput(event) {
    if (event.target.value >= 0 && event.target.value < 100) {
      setInterestRate(event.target.value);
      setStatus('normal');
    } else if (event.target.value >= 100) {
      setStatus('normal');
    } else {
      setStatus('error');
    }
  }

  return (
    <label htmlFor="interestRate" className="label-on-top">
      Interest Rate
      <div className="interest-container" data-status={status}>
        <input
          type="number"
          id="interestRate"
          value={interestRate}
          onChange={event => handleInput(event)}
        />
        <div className="back-unit">%</div>
      </div>
      {status == 'error' && <p className="error">This field is required.</p>}
    </label>
  );
}

export default InterestInput;
