import { useState } from 'react';
import './App.css';
import './form.css';
import './inputs.css';
import CompletedResults from './components/CompletedResults';
import IncompleteResults from './components/IncompleteResults';
import AmountInput from './components/AmountInput';
import TermInput from './components/TermInput';
import InterestInput from './components/InterestInput';
import { mortgageCalculator } from '@jdizm/finance-calculator';

function App() {
  const [status, setStatus] = useState('empty');
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('none');
  const [interestRate, setInterestRate] = useState('');
  const [mortgageType, setMortgageType] = useState('none');
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);

  function calculateMonthlyPayments(amount, term, interestRate, mortgageType) {
    const object = mortgageCalculator(
      {
        homeValue: amount,
        deposit: 0,
        interestRate: interestRate,
        years: term,
      },
      mortgageType
    );
    if (mortgageType == 'repayment') {
      return object.monthlyRepayment;
    } else if (mortgageType == 'interestOnly') {
      return object.interestPayments.monthly;
    } else {
      throw new Error('This should never happen');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (amount > 0 && term > 0) {
      setMonthlyRepayment(amount / term / 12);
    }
    if (
      amount > 0 &&
      term > 0 &&
      interestRate >= 0 &&
      mortgageType !== 'none'
    ) {
      setStatus('success');
      setMonthlyRepayment(
        calculateMonthlyPayments(amount, term, interestRate, mortgageType)
      );
    } else if (amount < 0 || term < 0 || interestRate < 0) {
      setStatus('error');
    } else if (
      amount == undefined &&
      term == 'none' &&
      interestRate == undefined &&
      mortgageType == 'none'
    ) {
      setStatus('empty');
    } else if (
      amount == undefined ||
      term == 'none' ||
      interestRate == undefined ||
      mortgageType == 'none'
    ) {
      setStatus('inprogress');
    } else {
      throw new Error('This should never happen');
    }
    console.log('status', status);
  }

  function clearAll() {
    setAmount('');
    setTerm('none');
    setInterestRate('');
    setMortgageType('none');
    setStatus('empty');
  }

  return (
    <div className="main">
      <form onSubmit={event => handleSubmit(event)}>
        <div className="title-and-button">
          <h1>Mortgage Calculator</h1>
          <button className="clear-button" type="reset" onClick={clearAll}>
            Clear All
          </button>
        </div>
        <AmountInput amount={amount} setAmount={setAmount}></AmountInput>

        <div className="flex-horizontal">
          <TermInput term={term} setTerm={setTerm}></TermInput>

          <InterestInput
            interestRate={interestRate}
            setInterestRate={setInterestRate}
          />
        </div>

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
              onChange={event => setMortgageType(event.target.value)}
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
              onChange={event => setMortgageType(event.target.value)}
            />
            Interest Only
          </label>
        </fieldset>
        <button type="submit" className="submit-button">
          <img src="./assets/images/icon-calculator.svg" />
          Calculate Repayments
        </button>
      </form>
      <div className="output-container">
        {status == 'success' ? (
          <CompletedResults monthlyRepayment={monthlyRepayment} term={term} />
        ) : (
          <IncompleteResults />
        )}
      </div>
    </div>
  );
}

export default App;
