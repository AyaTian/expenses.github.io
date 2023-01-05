import "./ExpensesList.css";
import ExpensesItem from "./ExpenseItem";

function ExpensesList(props) {
  let expensesContent = <p>No expensens</p>;
  if (props.filteredExpenses.length === 0) {
    return expensesContent;
  }

  return (
    <ul className="expense-list">
      {props.filteredExpenses.map((expense) => (
        <ExpensesItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
