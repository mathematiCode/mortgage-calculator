import { useState } from 'react';
import './App.css';
import CompletedResults from './components/CompletedResults';
import IncompleteResults from './components/IncompleteResults';

function App() {
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);

  return (
    <div className="main">
      <form>
        <div className="title-and-button">
          <h1>Mortgage Calculator</h1>
          <button className="clear-button">Clear All</button>
        </div>
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
        <button className="submit-button">
          <img src="./public/assets/images/icon-calculator" />
          Calculate Repayments
        </button>
      </form>
      <div className="output-container">
        <IncompleteResults />
        <CompletedResults
          monthlyRepayment={monthlyRepayment}
        ></CompletedResults>
      </div>
    </div>
  );
}

export default App;
