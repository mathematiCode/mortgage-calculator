/* eslint-disable react/prop-types */
function TermInput({ term, setTerm }) {
  return (
    <label htmlFor="mortgage-term" className="label-on-top">
      Mortgage Term
      <div className="term-container">
        <select
          id="mortgage-term"
          value={term}
          onChange={event => setTerm(event.target.value)}
        >
          <option value="none">Select Term</option>
          <optgroup label="term-options">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
          </optgroup>
        </select>
        <div id="years-unit" className="back-unit">
          years
        </div>
      </div>
    </label>
  );
}

export default TermInput;
