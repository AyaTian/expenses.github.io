import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredDate: "",
  //     enteredAmount: "",
  //   });
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const dateChangeHanler = (e) => {
    setEnteredDate(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredExpenseData = {
      amount: +enteredAmount,
      date: new Date(enteredDate),
      title: enteredTitle,
    };
    props.onSaveExpenseData(enteredExpenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");

    // console.log("enteredExpenseData", enteredExpenseData);
  };
  const onCancelHandler = (e) => {
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    props.stopEditingHandler();
  };
  // const titleChangeHandler = (e) => {
  //   setUserInput({ ...userInput, enteredTitle: e.target.value });
  // };
  // const dateChangeHanler = (e) => {
  //   setUserInput({ ...userInput, enteredDate: e.target.value });
  // };
  // const amountChangeHandler = (e) => {
  //   setUserInput({ ...userInput, enteredAmount: e.target.value });
  // };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHanler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={onCancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
