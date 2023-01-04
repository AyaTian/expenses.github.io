import React, { useState } from "react";
import ExpensesItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const expenses = props.expenses;
  const onYearChangeHandler = (event) => {
    setFilteredYear(event.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let expensesContent = <p>No expensens</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpensesItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ));
  }
  console.log("filteredExpenses", filteredExpenses);
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          onYearChangeHandler={onYearChangeHandler}
          selected={filteredYear}
        />
        {expensesContent}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expensens</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpensesItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          ))
        )} */}
      </div>
    </div>
  );
}

export default Expenses;
