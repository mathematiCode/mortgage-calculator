import { useState } from 'react';
import './App.css';
import './form.css';
import './inputs.css';

import AmountInput from './components/AmountInput';
import TermInput from './components/TermInput';
import InterestInput from './components/InterestInput';
import MortgageTypeInput from './components/MortgageTypeInput';
import CompletedResults from './components/CompletedResults';
import IncompleteResults from './components/IncompleteResults';
import { mortgageCalculator } from '@jdizm/finance-calculator';

function App() {
  const [status, setStatus] = useState('empty');
  const [amount, setAmount] = useState('');
  const [amountStatus, setAmountStatus] = useState('normal');
  const [term, setTerm] = useState('none');
  const [termStatus, setTermStatus] = useState('normal');
  const [interestRate, setInterestRate] = useState('');
  const [interestStatus, setInterestStatus] = useState('normal');
  const [mortgageType, setMortgageType] = useState('none');
  const [mortgageTypeStatus, setMortgageTypeStatus] = useState('normal');
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
    }
    if (amount < 0 || amount == '') {
      setStatus('error');
      setAmountStatus('error');
    }
    if (term < 0 || term == 'none') {
      setStatus('error');
      setTermStatus('error');
    }
    if (mortgageType == 'none') {
      setStatus('error');
      setMortgageTypeStatus('error');
    }
    if (interestRate <= 0 || interestRate == '' || interestRate > 100) {
      setStatus('error');
      setInterestStatus('error');
    }
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
        <AmountInput
          amount={amount}
          setAmount={setAmount}
          status={amountStatus}
          setStatus={setAmountStatus}
        ></AmountInput>

        <div className="flex-horizontal">
          <TermInput
            term={term}
            setTerm={setTerm}
            status={termStatus}
            setStatus={setTermStatus}
          ></TermInput>

          <InterestInput
            interestRate={interestRate}
            setInterestRate={setInterestRate}
            status={interestStatus}
            setStatus={setInterestStatus}
          />
        </div>

        <MortgageTypeInput
          mortgageType={mortgageType}
          setMortgageType={setMortgageType}
          status={mortgageTypeStatus}
          setStatus={setMortgageTypeStatus}
        />

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
