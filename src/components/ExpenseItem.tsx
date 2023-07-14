import "./ExpenseItem.css";
import Expense from "./Expense";
function ExpenseItem(props: { expense: Expense }): JSX.Element | null {
  return (
    <div className="expense-item">
      <h3>{props.expense.date.toString()}</h3>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">€ {props.expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
