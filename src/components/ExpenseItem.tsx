import "./ExpenseItem.css";
import Expense from "./Expense";
function ExpenseItem({ expense }: { expense: Expense }): JSX.Element | null {
  return (
    <div className="expense-item">
      <h3>{expense.date.toString()}</h3>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">€ {expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
