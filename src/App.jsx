import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="main">
      <form>
        <h1>Mortgage Calculator</h1>
        <button>Clear All</button>

        <label htmlFor="mortgageAmount" className="label-on-top">
          Mortgage Amount
          <input type="number" id="mortgageAmount" />
        </label>
        <div className="flex-horizontal">
          <label htmlFor="mortgageTerm" className="label-on-top">
            Mortgage Term
            <input type="number" id="mortgageTerm" />
          </label>
          <label htmlFor="interestRate" className="label-on-top">
            Interest Rate
            <input type="number" id="interestRate" />
          </label>
        </div>

        <fieldset>
          <legend>Mortgage Type </legend>
          <label htmlFor="repayment">
            <input type="radio" name="mortgageType" id="repayment" />
            Repayment
          </label>
          <label htmlFor="interest-only">
            <input type="radio" name="mortgageType" id="interest-only" />
            Interest Only
          </label>
        </fieldset>
      </form>
      <div className="output-container">
        <h2>Results</h2>
        <div className="output">
          Your results Your results are shown below based on the information you
          provided. To adjust the results, edit the form and click “calculate
          repayments” again. Your monthly repayments Total you'll repay over the
          term
        </div>
      </div>
    </div>
  );
}

export default App;
