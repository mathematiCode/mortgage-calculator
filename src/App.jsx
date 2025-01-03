import { useState } from 'react';
import './App.css';
import CompletedResults from './components/CompletedResults';
import IncompleteResults from './components/IncompleteResults';

function App() {
  const [status, setStatus] = useState('empty');
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [mortgageType, setMortgageType] = useState('none');
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('amount is', amount);
    console.log('term is', term);
    if (amount > 0 && term > 0) {
      setMonthlyRepayment(amount / term / 12);
    }
    if (amount > 0 && term > 0 && interestRate >= 0 && mortgageType) {
      setStatus('success');
      if (mortgageType == 'repayment') {
        setMonthlyRepayment(1000);
      } else if (mortgageType == 'interest-only') {
        setMonthlyRepayment(200);
      } else setMonthlyRepayment(5);
    } else if (amount < 0 || term < 0 || interestRate < 0 || mortgageType) {
      setStatus('inProgress');
    }
  }

  return (
    <div className="main">
      <form onSubmit={event => handleSubmit(event)}>
        <div className="title-and-button">
          <h1>Mortgage Calculator</h1>
          <button className="clear-button">Clear All</button>
        </div>
        <label htmlFor="mortgageAmount" className="label-on-top">
          Mortgage Amount
          <input
            type="number"
            id="mortgageAmount"
            value={amount}
            onChange={event => setAmount(event.target.value)}
          />
        </label>
        <div className="flex-horizontal">
          <label htmlFor="mortgageTerm" className="label-on-top">
            Mortgage Term
            <input
              type="number"
              id="mortgageTerm"
              value={term}
              onChange={event => setTerm(event.target.value)}
            />
          </label>
          <label htmlFor="interestRate" className="label-on-top">
            Interest Rate
            <input
              type="number"
              id="interestRate"
              value={interestRate}
              onChange={event => setInterestRate(event.target.value)}
            />
          </label>
        </div>

        <fieldset>
          <legend>Mortgage Type </legend>
          <label htmlFor="repayment" className="mortgage-type">
            <input
              type="radio"
              name="mortgageType"
              id="repayment"
              value={'repayment'}
              checked={mortgageType === 'repayment'}
              onChange={event => setMortgageType(event.target.value)}
            />
            Repayment
          </label>
          <label htmlFor="interest-only" className="mortgage-type">
            <input
              type="radio"
              name="mortgageType"
              id="interest-only"
              value="interest-only"
              checked={mortgageType === 'interest-only'}
              onChange={event => setMortgageType(event.target.value)}
            />
            Interest Only
          </label>
        </fieldset>
        <button className="submit-button">
          <img src="./assets/images/icon-calculator.svg" />
          Calculate Repayments
        </button>
      </form>
      <div className="output-container">
        {status == 'success' ? (
          <CompletedResults monthlyRepayment={monthlyRepayment} />
        ) : (
          <IncompleteResults />
        )}
      </div>
    </div>
  );
}

export default App;
