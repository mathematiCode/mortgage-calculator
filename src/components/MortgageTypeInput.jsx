/* eslint-disable react/prop-types */
function MortgageTypeInput({
  mortgageType,
  setMortgageType,
  status,
  setStatus,
}) {
  function handleInput(event) {
    setMortgageType(event.target.value);
    setStatus('normal');
  }
  return (
    <fieldset>
      <legend>Mortgage Type </legend>
      <label
        htmlFor="repayment"
        className="mortgage-type"
        data-selected={mortgageType === 'repayment'}
      >
        <input
          type="radio"
          name="mortgageType"
          id="repayment"
          value={'repayment'}
          checked={mortgageType === 'repayment'}
          onChange={event => handleInput(event)}
        />
        Repayment
      </label>
      <label
        htmlFor="interestOnly"
        className="mortgage-type"
        data-selected={mortgageType === 'interestOnly'}
      >
        <input
          type="radio"
          name="mortgageType"
          id="interestOnly"
          value="interestOnly"
          checked={mortgageType === 'interestOnly'}
          onChange={event => handleInput(event)}
        />
        Interest Only
      </label>
      {status == 'error' && <p className="error">This field is required.</p>}
    </fieldset>
  );
}

export default MortgageTypeInput;
