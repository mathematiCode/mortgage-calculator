/* eslint-disable react/prop-types */

import { useState } from 'react';
function TermInput({ term, setTerm }) {
  const [status, setStatus] = useState('normal');

  function handleInput(event) {
    if (event.target.value !== 'none') {
      setTerm(event.target.value);
      setStatus('normal');
    } else {
      setStatus('error');
      throw new Error('This should never happen');
    }
  }
  return (
    <label htmlFor="mortgage-term" className="label-on-top">
      Mortgage Term
      <div className="term-container">
        <select
          id="mortgage-term"
          value={term}
          onChange={event => handleInput(event)}
          data-status={status}
        >
          <option value="none" disabled="true">
            Select Term
          </option>
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
