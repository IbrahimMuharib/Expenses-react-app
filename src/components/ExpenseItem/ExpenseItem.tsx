import "./ExpenseItem.css";
import { Expense } from "./Expense";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card";
function ExpenseItem({ expense }: { expense: Expense }): JSX.Element | null {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <Card className="expense-item__price">€ {expense.amount}</Card>
      </div>
    </Card>
  );
}

export default ExpenseItem;
