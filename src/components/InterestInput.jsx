/* eslint-disable react/prop-types */
function InterestInput({ interestRate, setInterestRate }) {
  return (
    <label htmlFor="interestRate" className="label-on-top">
      Interest Rate
      <div className="interest-container">
        <input
          type="number"
          id="interestRate"
          value={interestRate}
          onChange={event => {
            if (event.target.value >= 0 && event.target.value <= 100) {
              setInterestRate(event.target.value);
            }
          }}
        />
        <div className="back-unit">%</div>
      </div>
    </label>
  );
}

export default InterestInput;
